/* */ 
define(['exports', 'aurelia-metadata', 'aurelia-loader'], function (exports, _aureliaMetadata, _aureliaLoader) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var polyfilled = false;
  var url = null;

  if (!window.System || !window.System['import']) {
    var sys = window.System = window.System || {};

    sys.polyfilled = polyfilled = true;
    sys.isFake = false;
    sys.map = {};

    sys['import'] = function (moduleId) {
      return new Promise(function (resolve, reject) {
        require([moduleId], resolve, reject);
      });
    };

    sys.normalize = function (url) {
      return Promise.resolve(url);
    };

    if (window.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
      var defined = requirejs.s.contexts._.defined;
      sys.forEachModule = function (callback) {
        for (var key in defined) {
          if (callback(key, defined[key])) return;
        }
      };
    } else {
      sys.forEachModule = function (callback) {};
    }
  } else {
    var modules = System._loader.modules,
        hasURL = false;

    try {
      hasURL = new URL('test:///').protocol == 'test:';
    } catch (e) {}

    url = hasURL ? URL : URLPolyfill;

    System.isFake = false;
    System.forEachModule = function (callback) {
      for (var key in modules) {
        if (callback(key, modules[key].module)) return;
      }
    };
  }

  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;

    if (target.__useDefault) {
      target = target['default'];
    }

    _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === "function") {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(name, key));
      }
    }

    return executed;
  }

  function getCanonicalName(loader, normalized) {
    var pluginIndex = normalized.indexOf('!');
    var plugin;
    if (pluginIndex != -1) {
      plugin = normalized.substr(pluginIndex + 1);
      normalized = normalized.substr(0, pluginIndex);
    }

    if (loader.defaultJSExtensions && normalized.split('/').pop().split('.').pop() == 'js') {
      var isDefaultExtensionPackage = false;
      for (var p in loader.packages) {
        if (normalized.substr(0, p.length) == p && (normalized.length == p.length || normalized[p.length] == '/')) {
          if ('defaultExtension' in loader.packages[p]) isDefaultExtensionPackage = true;
        }
      }

      if (!isDefaultExtensionPackage) normalized = normalized.substr(0, normalized.length - 3);
    }

    var pathMatch,
        pathMatchLength = 0;
    var curMatchLength;
    for (var p in loader.paths) {
      var curPath = new url(loader.paths[p], loader.baseURL).href;

      var wIndex = curPath.indexOf('*');
      if (wIndex === -1) {
        if (normalized === curPath) {
          curMatchLength = curPath.split('/').length;
          if (curMatchLength > pathMatchLength) {
            pathMatch = p;
            pathMatchLength = curMatchLength;
          }
        }
      } else {
        if (normalized.substr(0, wIndex) === curPath.substr(0, wIndex) && normalized.substr(normalized.length - curPath.length + wIndex + 1) === curPath.substr(wIndex + 1)) {
          curMatchLength = curPath.split('/').length;
          if (curMatchLength > pathMatchLength) {
            pathMatch = p.replace('*', normalized.substr(wIndex, normalized.length - curPath.length + 1));
            pathMatchLength = curMatchLength;
          }
        }
      }
    }

    if (!pathMatch) {
      if (normalized.substr(0, loader.baseURL.length) == loader.baseURL) pathMatch = normalized.substr(loader.baseURL.length);else pathMatch = normalized;
    }

    if (plugin) pathMatch += '!' + getCanonicalName(loader, plugin);

    return pathMatch;
  }

  var DefaultLoader = (function (_Loader) {
    _inherits(DefaultLoader, _Loader);

    function DefaultLoader() {
      _classCallCheck(this, DefaultLoader);

      _Loader.call(this);

      this.moduleRegistry = {};
      var that = this;

      if (polyfilled) {
        define('view', [], {
          'load': function load(name, req, onload, config) {
            var entry = that.getOrCreateTemplateRegistryEntry(name),
                address;

            if (entry.templateIsLoaded) {
              onload(entry);
              return;
            }

            that.findBundledTemplate(name, entry).then(function (found) {
              if (found) {
                onload(entry);
              } else {
                address = req.toUrl(name);

                that.importTemplate(address).then(function (template) {
                  entry.setTemplate(template);
                  onload(entry);
                });
              }
            });
          }
        });
      } else {
        System.set('view', System.newModule({
          'fetch': function fetch(load, _fetch) {
            var name = getCanonicalName(this, load.name);
            var id = name.substring(0, name.indexOf('!'));
            var entry = load.metadata.templateRegistryEntry = that.getOrCreateTemplateRegistryEntry(id);

            if (entry.templateIsLoaded) {
              return '';
            }

            return that.findBundledTemplate(name, entry).then(function (found) {
              if (found) {
                return '';
              }

              return that.importTemplate(load.address).then(function (template) {
                entry.setTemplate(template);
                return '';
              });
            });
          },
          'instantiate': function instantiate(load) {
            return load.metadata.templateRegistryEntry;
          }
        }));
      }
    }

    DefaultLoader.prototype.loadModule = function loadModule(id) {
      var _this = this;

      return System.normalize(id).then(function (newId) {
        var existing = _this.moduleRegistry[newId];
        if (existing) {
          return existing;
        }

        return System['import'](newId).then(function (m) {
          _this.moduleRegistry[newId] = m;
          return ensureOriginOnExports(m, newId);
        });
      });
    };

    DefaultLoader.prototype.loadAllModules = function loadAllModules(ids) {
      var loads = [];

      for (var i = 0, ii = ids.length; i < ii; ++i) {
        loads.push(this.loadModule(ids[i]));
      }

      return Promise.all(loads);
    };

    DefaultLoader.prototype.loadTemplate = function loadTemplate(url) {
      return polyfilled ? System['import']('view!' + url) : System['import'](url + '!view');
    };

    DefaultLoader.prototype.loadText = function loadText(url) {
      return polyfilled ? System['import']('text!' + url) : System['import'](url + '!text');
    };

    return DefaultLoader;
  })(_aureliaLoader.Loader);

  exports.DefaultLoader = DefaultLoader;

  window.AureliaLoader = DefaultLoader;
});