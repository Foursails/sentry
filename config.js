System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-bundle": [
      "npm:font-awesome@4.4.0",
      "npm:font-awesome@4.4.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.13",
      "github:github/fetch@0.9.0",
      "github:github/fetch@0.9.0/fetch",
      "github:systemjs/plugin-css@0.1.13",
      "github:systemjs/plugin-css@0.1.13/css",
      "npm:core-js@0.9.18",
      "npm:core-js@0.9.18/client/shim.min",
      "github:jspm/nodelibs-process@0.1.1",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:process@0.10.1",
      "npm:process@0.10.1/browser",
      "npm:clean-css@3.3.8",
      "npm:clean-css@3.3.8/index",
      "npm:clean-css@3.3.8/lib/clean",
      "github:jspm/nodelibs-fs@0.1.2",
      "npm:clean-css@3.3.8/lib/imports/inliner",
      "npm:clean-css@3.3.8/lib/stringifier/simple",
      "github:jspm/nodelibs-path@0.1.0",
      "npm:clean-css@3.3.8/lib/urls/rebase",
      "npm:clean-css@3.3.8/lib/text/comments-processor",
      "npm:clean-css@3.3.8/lib/stringifier/source-maps",
      "npm:clean-css@3.3.8/lib/selectors/optimizer",
      "npm:clean-css@3.3.8/lib/text/expressions-processor",
      "npm:clean-css@3.3.8/lib/text/free-text-processor",
      "npm:clean-css@3.3.8/lib/utils/compatibility",
      "npm:clean-css@3.3.8/lib/text/urls-processor",
      "npm:clean-css@3.3.8/lib/utils/source-tracker",
      "npm:clean-css@3.3.8/lib/properties/validator",
      "npm:clean-css@3.3.8/lib/utils/input-source-map-tracker",
      "npm:clean-css@3.3.8/lib/utils/source-reader",
      "github:jspm/nodelibs-fs@0.1.2/index",
      "github:jspm/nodelibs-https@0.1.0",
      "github:jspm/nodelibs-http@1.7.1",
      "github:jspm/nodelibs-url@0.1.0",
      "npm:clean-css@3.3.8/lib/utils/splitter",
      "npm:clean-css@3.3.8/lib/urls/rewrite",
      "npm:clean-css@3.3.8/lib/stringifier/helpers",
      "npm:clean-css@3.3.8/lib/utils/object",
      "github:jspm/nodelibs-path@0.1.0/index",
      "github:jspm/nodelibs-os@0.1.0",
      "npm:clean-css@3.3.8/lib/utils/quote-scanner",
      "npm:clean-css@3.3.8/lib/tokenizer/tokenize",
      "npm:source-map@0.4.4",
      "npm:clean-css@3.3.8/lib/selectors/optimizers/simple",
      "github:jspm/nodelibs-util@0.1.0",
      "npm:clean-css@3.3.8/lib/selectors/optimization-metadata",
      "npm:clean-css@3.3.8/lib/selectors/optimizers/advanced",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:clean-css@3.3.8/lib/urls/reduce",
      "npm:clean-css@3.3.8/lib/text/escape-store",
      "github:jspm/nodelibs-https@0.1.0/index",
      "github:jspm/nodelibs-http@1.7.1/index",
      "github:jspm/nodelibs-url@0.1.0/index",
      "npm:clean-css@3.3.8/lib/tokenizer/chunker",
      "npm:clean-css@3.3.8/lib/tokenizer/extract-properties",
      "npm:clean-css@3.3.8/lib/tokenizer/extract-selectors",
      "npm:clean-css@3.3.8/lib/source-maps/track",
      "github:jspm/nodelibs-os@0.1.0/index",
      "npm:source-map@0.4.4/lib/source-map",
      "npm:clean-css@3.3.8/lib/selectors/optimizers/clean-up",
      "npm:clean-css@3.3.8/lib/colors/hsl",
      "npm:clean-css@3.3.8/lib/colors/rgb",
      "npm:clean-css@3.3.8/lib/colors/hex-name-shortener",
      "github:jspm/nodelibs-util@0.1.0/index",
      "npm:clean-css@3.3.8/lib/properties/optimizer",
      "npm:clean-css@3.3.8/lib/selectors/reorderable",
      "npm:clean-css@3.3.8/lib/selectors/extractor",
      "npm:clean-css@3.3.8/lib/stringifier/one-time",
      "npm:path-browserify@0.0.0",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:https-browserify@0.0.0",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:url@0.10.3",
      "github:jspm/nodelibs-http@1.7.1/lib/request",
      "npm:os-browserify@0.1.2",
      "npm:source-map@0.4.4/lib/source-map/source-map-generator",
      "npm:source-map@0.4.4/lib/source-map/source-map-consumer",
      "npm:util@0.10.3",
      "npm:source-map@0.4.4/lib/source-map/source-node",
      "npm:clean-css@3.3.8/lib/properties/compactable",
      "npm:clean-css@3.3.8/lib/properties/wrap-for-optimizing",
      "npm:clean-css@3.3.8/lib/properties/populate-components",
      "npm:clean-css@3.3.8/lib/properties/shorthand-compactor",
      "npm:clean-css@3.3.8/lib/properties/remove-unused",
      "npm:clean-css@3.3.8/lib/properties/override-compactor",
      "npm:path-browserify@0.0.0/index",
      "npm:buffer@3.4.1",
      "npm:clean-css@3.3.8/lib/properties/restore-shorthands",
      "npm:https-browserify@0.0.0/index",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:Base64@0.2.1",
      "npm:url@0.10.3/url",
      "github:jspm/nodelibs-stream@0.1.0",
      "github:jspm/nodelibs-http@1.7.1/lib/response",
      "npm:os-browserify@0.1.2/browser",
      "npm:inherits@2.0.1",
      "npm:amdefine@1.0.0",
      "npm:source-map@0.4.4/lib/source-map/util",
      "npm:source-map@0.4.4/lib/source-map/base64-vlq",
      "npm:source-map@0.4.4/lib/source-map/binary-search",
      "npm:source-map@0.4.4/lib/source-map/array-set",
      "npm:source-map@0.4.4/lib/source-map/mapping-list",
      "npm:source-map@0.4.4/lib/source-map/quick-sort",
      "npm:util@0.10.3/util",
      "npm:clean-css@3.3.8/lib/properties/break-up",
      "npm:clean-css@3.3.8/lib/properties/can-override",
      "npm:clean-css@3.3.8/lib/properties/clone",
      "npm:clean-css@3.3.8/lib/properties/has-inherit",
      "npm:clean-css@3.3.8/lib/properties/restore",
      "npm:clean-css@3.3.8/lib/properties/every-combination",
      "npm:clean-css@3.3.8/lib/properties/vendor-prefixes",
      "npm:buffer@3.4.1/index",
      "npm:events@1.0.2",
      "npm:Base64@0.2.1/base64",
      "npm:punycode@1.3.2",
      "npm:querystring@0.2.0",
      "github:jspm/nodelibs-stream@0.1.0/index",
      "npm:amdefine@1.0.0/amdefine",
      "npm:inherits@2.0.1/inherits_browser",
      "npm:source-map@0.4.4/lib/source-map/base64",
      "npm:util@0.10.3/support/isBufferBrowser",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6",
      "npm:is-array@1.0.1",
      "npm:events@1.0.2/events",
      "npm:punycode@1.3.2/punycode",
      "npm:stream-browserify@1.0.0",
      "npm:querystring@0.2.0/index",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.6/index",
      "npm:is-array@1.0.1/index",
      "npm:stream-browserify@1.0.0/index",
      "npm:querystring@0.2.0/decode",
      "npm:querystring@0.2.0/encode",
      "npm:readable-stream@1.1.13/readable",
      "npm:readable-stream@1.1.13/transform",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:readable-stream@1.1.13/passthrough",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough",
      "npm:isarray@0.0.1",
      "npm:core-util-is@1.0.1",
      "npm:string_decoder@0.10.31",
      "npm:isarray@0.0.1/index",
      "npm:string_decoder@0.10.31/index",
      "npm:core-util-is@1.0.1/lib/util",
      "github:twbs/bootstrap@3.3.5",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "github:aurelia/templating-router@0.15.0",
      "github:aurelia/templating-router@0.15.0/aurelia-templating-router",
      "github:aurelia/router@0.11.0",
      "github:aurelia/router@0.11.0/aurelia-router",
      "github:aurelia/logging@0.6.4",
      "github:aurelia/dependency-injection@0.9.2",
      "github:aurelia/route-recognizer@0.6.2",
      "github:aurelia/path@0.8.1",
      "github:aurelia/history@0.6.1",
      "github:aurelia/event-aggregator@0.7.0",
      "github:aurelia/logging@0.6.4/aurelia-logging",
      "github:aurelia/dependency-injection@0.9.2/aurelia-dependency-injection",
      "github:aurelia/route-recognizer@0.6.2/aurelia-route-recognizer",
      "github:aurelia/path@0.8.1/aurelia-path",
      "github:aurelia/history@0.6.1/aurelia-history",
      "github:aurelia/event-aggregator@0.7.0/aurelia-event-aggregator",
      "github:aurelia/metadata@0.7.3",
      "github:aurelia/metadata@0.7.3/aurelia-metadata",
      "github:aurelia/templating-router@0.15.0/route-loader",
      "github:aurelia/templating@0.14.1",
      "github:aurelia/templating@0.14.1/aurelia-templating",
      "github:aurelia/loader@0.8.7",
      "github:aurelia/binding@0.8.6",
      "github:aurelia/task-queue@0.6.2",
      "github:aurelia/loader@0.8.7/aurelia-loader",
      "github:aurelia/binding@0.8.6/aurelia-binding",
      "github:aurelia/task-queue@0.6.2/aurelia-task-queue",
      "github:aurelia/templating-router@0.15.0/router-view",
      "github:aurelia/templating-router@0.15.0/route-href",
      "github:aurelia/templating-resources@0.14.0",
      "github:aurelia/templating-resources@0.14.0/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.14.0/compose",
      "github:aurelia/templating-resources@0.14.0/if",
      "github:aurelia/templating-resources@0.14.0/with",
      "github:aurelia/templating-resources@0.14.0/global-behavior",
      "github:aurelia/templating-resources@0.14.0/sanitize-html",
      "github:aurelia/templating-resources@0.14.0/show",
      "github:aurelia/templating-resources@0.14.0/replaceable",
      "github:aurelia/templating-resources@0.14.0/compile-spy",
      "github:aurelia/templating-resources@0.14.0/repeat",
      "github:aurelia/templating-resources@0.14.0/focus",
      "github:aurelia/templating-resources@0.14.0/view-spy",
      "github:aurelia/templating-binding@0.14.0",
      "github:aurelia/templating-binding@0.14.0/aurelia-templating-binding",
      "github:aurelia/loader-default@0.9.5",
      "github:aurelia/loader-default@0.9.5/aurelia-loader-default",
      "github:aurelia/http-client@0.11.0",
      "github:aurelia/http-client@0.11.0/aurelia-http-client",
      "github:aurelia/path@0.9.0",
      "github:aurelia/path@0.9.0/aurelia-path",
      "github:aurelia/history-browser@0.7.0",
      "github:aurelia/history-browser@0.7.0/aurelia-history-browser",
      "github:aurelia/framework@0.15.0",
      "github:aurelia/framework@0.15.0/aurelia-framework",
      "github:aurelia/fetch-client@0.1.2",
      "github:aurelia/fetch-client@0.1.2/aurelia-fetch-client",
      "github:aurelia/bootstrapper@0.16.0",
      "github:aurelia/bootstrapper@0.16.0/aurelia-bootstrapper",
      "github:aurelia/logging-console@0.6.2",
      "github:aurelia/logging-console@0.6.2/aurelia-logging-console"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.15.0",
    "aurelia-binding": "github:aurelia/binding@0.8.6",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.16.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.1.2",
    "aurelia-framework": "github:aurelia/framework@0.15.0",
    "aurelia-history": "github:aurelia/history@0.6.1",
    "aurelia-history-browser": "github:aurelia/history-browser@0.7.0",
    "aurelia-http-client": "github:aurelia/http-client@0.11.0",
    "aurelia-loader": "github:aurelia/loader@0.8.7",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
    "aurelia-logging": "github:aurelia/logging@0.6.4",
    "aurelia-metadata": "github:aurelia/metadata@0.7.3",
    "aurelia-path": "github:aurelia/path@0.8.1",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.2",
    "aurelia-router": "github:aurelia/router@0.11.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
    "aurelia-templating": "github:aurelia/templating@0.14.1",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.14.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.14.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.15.0",
    "aurelia/fetch-client": "github:aurelia/fetch-client@0.1.1",
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.3.8",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "github:aurelia/animator-css@0.15.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-templating": "github:aurelia/templating@0.14.1"
    },
    "github:aurelia/binding@0.8.6": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.16.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
      "aurelia-framework": "github:aurelia/framework@0.15.0",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.7.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.2",
      "aurelia-router": "github:aurelia/router@0.11.0",
      "aurelia-templating": "github:aurelia/templating@0.14.1",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.14.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.14.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.15.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.7.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.4"
    },
    "github:aurelia/fetch-client@0.1.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/fetch-client@0.1.2": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.15.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.6",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-loader": "github:aurelia/loader@0.8.7",
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.14.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.7.0": {
      "aurelia-history": "github:aurelia/history@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.11.0": {
      "aurelia-path": "github:aurelia/path@0.9.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.5": {
      "aurelia-loader": "github:aurelia/loader@0.8.7",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3"
    },
    "github:aurelia/loader@0.8.7": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/logging-console@0.6.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.4"
    },
    "github:aurelia/metadata@0.7.3": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.2": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.11.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.14.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.6",
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-templating": "github:aurelia/templating@0.14.1"
    },
    "github:aurelia/templating-resources@0.14.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.6",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.14.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.15.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-router": "github:aurelia/router@0.11.0",
      "aurelia-templating": "github:aurelia/templating@0.14.1"
    },
    "github:aurelia/templating@0.14.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.6",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.7",
      "aurelia-logging": "github:aurelia/logging@0.6.4",
      "aurelia-metadata": "github:aurelia/metadata@0.7.3",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.4.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.3.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
