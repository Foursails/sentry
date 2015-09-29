/* */ 
define(['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var CssAnimator = (function () {
    function CssAnimator() {
      _classCallCheck(this, CssAnimator);

      this.animationStack = [];

      this.useAnimationDoneClasses = false;
      this.animationEnteredClass = 'au-entered';
      this.animationLeftClass = 'au-left';
      this.isAnimating = false;

      this.animationTimeout = 50;
    }

    CssAnimator.prototype._addMultipleEventListener = function _addMultipleEventListener(el, s, fn) {
      var evts = s.split(' '),
          i,
          ii;

      for (i = 0, ii = evts.length; i < ii; ++i) {
        el.addEventListener(evts[i], fn, false);
      }
    };

    CssAnimator.prototype._addAnimationToStack = function _addAnimationToStack(animId) {
      if (this.animationStack.indexOf(animId) < 0) {
        this.animationStack.push(animId);
      }
    };

    CssAnimator.prototype._removeAnimationFromStack = function _removeAnimationFromStack(animId) {
      var idx = this.animationStack.indexOf(animId);
      if (idx > -1) {
        this.animationStack.splice(idx, 1);
      }
    };

    CssAnimator.prototype._getElementAnimationDelay = function _getElementAnimationDelay(element) {
      var styl = window.getComputedStyle(element);
      var prop, delay;

      if (styl.getPropertyValue('animation-delay')) {
        prop = 'animation-delay';
      } else if (styl.getPropertyValue('-webkit-animation-delay')) {
        prop = '-webkit-animation-delay';
      } else if (styl.getPropertyValue('-moz-animation-delay')) {
        prop = '-moz-animation-delay';
      } else {
        return 0;
      }
      delay = styl.getPropertyValue(prop);
      delay = Number(delay.replace(/[^\d\.]/g, ''));

      return delay * 1000;
    };

    CssAnimator.prototype._performSingleAnimate = function _performSingleAnimate(element, className) {
      var _this = this;

      this._triggerDOMEvent(_aureliaTemplating.animationEvent.animateBegin, element);

      return this.addClass(element, className, true).then(function (result) {
        _this._triggerDOMEvent(_aureliaTemplating.animationEvent.animateActive, element);

        if (result !== false) {
          return _this.removeClass(element, className, true).then(function () {
            _this._triggerDOMEvent(_aureliaTemplating.animationEvent.animateDone, element);
          });
        } else {
          return false;
        }
      })['catch'](function () {
        _this._triggerDOMEvent(_aureliaTemplating.animationEvent.animateTimeout, element);
      });
    };

    CssAnimator.prototype._triggerDOMEvent = function _triggerDOMEvent(eventType, element) {
      var evt = new window.CustomEvent(eventType, { bubbles: true, cancelable: true, detail: element });
      document.dispatchEvent(evt);
    };

    CssAnimator.prototype.animate = function animate(element, className) {
      var _this2 = this;

      if (Array.isArray(element)) {
        return Promise.all(element.map(function (el) {
          return _this2._performSingleAnimate(el, className);
        }));
      } else {
        return this._performSingleAnimate(element, className);
      }
    };

    CssAnimator.prototype.runSequence = function runSequence(animations) {
      var _this3 = this;

      this._triggerDOMEvent(_aureliaTemplating.animationEvent.sequenceBegin, null);

      return animations.reduce(function (p, anim) {
        return p.then(function () {
          return _this3.animate(anim.element, anim.className);
        });
      }, Promise.resolve(true)).then(function () {
        _this3._triggerDOMEvent(_aureliaTemplating.animationEvent.sequenceDone, null);
      });
    };

    CssAnimator.prototype.move = function move() {
      return Promise.resolve(false);
    };

    CssAnimator.prototype.enter = function enter(element) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var animId = element.toString() + Math.random(),
            classList = element.classList;

        _this4._triggerDOMEvent(_aureliaTemplating.animationEvent.enterBegin, element);

        if (_this4.useAnimationDoneClasses) {
          classList.remove(_this4.animationEnteredClass);
          classList.remove(_this4.animationLeftClass);
        }

        classList.add('au-enter');

        var animStart;
        _this4._addMultipleEventListener(element, "webkitAnimationStart animationstart", animStart = function (evAnimStart) {
          _this4.isAnimating = true;

          _this4._triggerDOMEvent(_aureliaTemplating.animationEvent.enterActive, element);

          evAnimStart.stopPropagation();

          _this4._addAnimationToStack(animId);

          var animEnd;
          _this4._addMultipleEventListener(element, "webkitAnimationEnd animationend", animEnd = function (evAnimEnd) {
            evAnimEnd.stopPropagation();

            classList.remove('au-enter-active');
            classList.remove('au-enter');

            _this4._removeAnimationFromStack(animId);

            evAnimEnd.target.removeEventListener(evAnimEnd.type, animEnd);

            if (_this4.useAnimationDoneClasses && _this4.animationEnteredClass !== undefined && _this4.animationEnteredClass !== null) {
              classList.add(_this4.animationEnteredClass);
            }

            _this4.isAnimating = false;
            _this4._triggerDOMEvent(_aureliaTemplating.animationEvent.enterDone, element);

            resolve(true);
          }, false);

          evAnimStart.target.removeEventListener(evAnimStart.type, animStart);
        }, false);

        var parent = element.parentElement,
            delay = 0;

        if (parent !== null && parent !== undefined && (parent.classList.contains('au-stagger') || parent.classList.contains('au-stagger-enter'))) {
          var elemPos = Array.prototype.indexOf.call(parent.childNodes, element);
          delay = _this4._getElementAnimationDelay(parent) * elemPos;

          _this4._triggerDOMEvent(_aureliaTemplating.animationEvent.staggerNext, element);

          setTimeout(function () {
            classList.add('au-enter-active');
          }, delay);
        } else {
          classList.add('au-enter-active');
        }

        setTimeout(function () {
          if (_this4.animationStack.indexOf(animId) < 0) {
            classList.remove('au-enter-active');
            classList.remove('au-enter');

            _this4._triggerDOMEvent(_aureliaTemplating.animationEvent.enterTimeout, element);

            resolve(false);
          }
        }, _this4._getElementAnimationDelay(element) + _this4.animationTimeout + delay);
      });
    };

    CssAnimator.prototype.leave = function leave(element) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var animId = element.toString() + Math.random(),
            classList = element.classList;

        _this5._triggerDOMEvent(_aureliaTemplating.animationEvent.leaveBegin, element);

        if (_this5.useAnimationDoneClasses) {
          classList.remove(_this5.animationEnteredClass);
          classList.remove(_this5.animationLeftClass);
        }

        classList.add('au-leave');

        var animStart;
        _this5._addMultipleEventListener(element, "webkitAnimationStart animationstart", animStart = function (evAnimStart) {
          _this5.isAnimating = true;

          _this5._triggerDOMEvent(_aureliaTemplating.animationEvent.leaveActive, element);

          evAnimStart.stopPropagation();

          _this5._addAnimationToStack(animId);

          var animEnd;
          _this5._addMultipleEventListener(element, "webkitAnimationEnd animationend", animEnd = function (evAnimEnd) {
            evAnimEnd.stopPropagation();

            classList.remove('au-leave-active');
            classList.remove('au-leave');

            _this5._removeAnimationFromStack(animId);

            evAnimEnd.target.removeEventListener(evAnimEnd.type, animEnd);

            if (_this5.useAnimationDoneClasses && _this5.animationLeftClass !== undefined && _this5.animationLeftClass !== null) {
              classList.add(_this5.animationLeftClass);
            }

            _this5.isAnimating = false;
            _this5._triggerDOMEvent(_aureliaTemplating.animationEvent.leaveDone, element);

            resolve(true);
          }, false);

          evAnimStart.target.removeEventListener(evAnimStart.type, animStart);
        }, false);

        var parent = element.parentElement,
            delay = 0;

        if (parent !== null && parent !== undefined && (parent.classList.contains('au-stagger') || parent.classList.contains('au-stagger-leave'))) {
          var elemPos = Array.prototype.indexOf.call(parent.childNodes, element);
          delay = _this5._getElementAnimationDelay(parent) * elemPos;

          _this5._triggerDOMEvent(_aureliaTemplating.animationEvent.staggerNext, element);

          setTimeout(function () {
            classList.add('au-leave-active');
          }, delay);
        } else {
          classList.add('au-leave-active');
        }

        setTimeout(function () {
          if (_this5.animationStack.indexOf(animId) < 0) {
            classList.remove('au-leave-active');
            classList.remove('au-leave');

            _this5._triggerDOMEvent(_aureliaTemplating.animationEvent.leaveTimeout, element);

            resolve(false);
          }
        }, _this5._getElementAnimationDelay(element) + _this5.animationTimeout + delay);
      });
    };

    CssAnimator.prototype.removeClass = function removeClass(element, className) {
      var _this6 = this;

      var suppressEvents = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return new Promise(function (resolve, reject) {
        var classList = element.classList;

        if (!classList.contains(className)) {
          resolve(false);
          return;
        }

        if (suppressEvents !== true) {
          _this6._triggerDOMEvent(_aureliaTemplating.animationEvent.removeClassBegin, element);
        }

        var animId = element.toString() + className + Math.random();

        classList.remove(className);

        var animStart;
        _this6._addMultipleEventListener(element, "webkitAnimationStart animationstart", animStart = function (evAnimStart) {
          _this6.isAnimating = true;

          if (suppressEvents !== true) {
            _this6._triggerDOMEvent(_aureliaTemplating.animationEvent.removeClassActive, element);
          }

          evAnimStart.stopPropagation();

          _this6._addAnimationToStack(animId);

          var animEnd;
          _this6._addMultipleEventListener(element, "webkitAnimationEnd animationend", animEnd = function (evAnimEnd) {
            evAnimEnd.stopPropagation();

            classList.remove(className + "-remove");

            _this6._removeAnimationFromStack(animId);

            evAnimEnd.target.removeEventListener(evAnimEnd.type, animEnd);

            _this6.isAnimating = false;

            if (suppressEvents !== true) {
              _this6._triggerDOMEvent(_aureliaTemplating.animationEvent.removeClassDone, element);
            }

            resolve(true);
          }, false);

          evAnimStart.target.removeEventListener(evAnimStart.type, animStart);
        }, false);

        classList.add(className + "-remove");

        setTimeout(function () {
          if (_this6.animationStack.indexOf(animId) < 0) {
            classList.remove(className + "-remove");
            classList.remove(className);

            if (suppressEvents !== true) {
              _this6._triggerDOMEvent(_aureliaTemplating.animationEvent.removeClassTimeout, element);
            }

            resolve(false);
          }
        }, _this6._getElementAnimationDelay(element) + _this6.animationTimeout);
      });
    };

    CssAnimator.prototype.addClass = function addClass(element, className) {
      var _this7 = this;

      var suppressEvents = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return new Promise(function (resolve, reject) {
        var animId = element.toString() + className + Math.random(),
            classList = element.classList;

        if (suppressEvents !== true) {
          _this7._triggerDOMEvent(_aureliaTemplating.animationEvent.addClassBegin, element);
        }

        var animStart;
        _this7._addMultipleEventListener(element, "webkitAnimationStart animationstart", animStart = function (evAnimStart) {
          _this7.isAnimating = true;

          if (suppressEvents !== true) {
            _this7._triggerDOMEvent(_aureliaTemplating.animationEvent.addClassActive, element);
          }

          evAnimStart.stopPropagation();

          _this7._addAnimationToStack(animId);

          var animEnd;
          _this7._addMultipleEventListener(element, "webkitAnimationEnd animationend", animEnd = function (evAnimEnd) {
            evAnimEnd.stopPropagation();

            classList.add(className);

            classList.remove(className + "-add");

            _this7._removeAnimationFromStack(animId);

            evAnimEnd.target.removeEventListener(evAnimEnd.type, animEnd);

            _this7.isAnimating = false;

            if (suppressEvents !== true) {
              _this7._triggerDOMEvent(_aureliaTemplating.animationEvent.addClassDone, element);
            }

            resolve(true);
          }, false);

          evAnimStart.target.removeEventListener(evAnimStart.type, animStart);
        }, false);

        classList.add(className + "-add");

        setTimeout(function () {
          if (_this7.animationStack.indexOf(animId) < 0) {
            classList.remove(className + "-add");
            classList.add(className);

            if (suppressEvents !== true) {
              _this7._triggerDOMEvent(_aureliaTemplating.animationEvent.addClassTimeout, element);
            }

            resolve(false);
          }
        }, _this7._getElementAnimationDelay(element) + _this7.animationTimeout);
      });
    };

    return CssAnimator;
  })();

  exports.CssAnimator = CssAnimator;

  function configure(config, callback) {
    var animator = config.container.get(CssAnimator);

    _aureliaTemplating.Animator.configureDefault(config.container, animator);

    if (typeof callback === 'function') {
      callback(animator);
    }
  }
});