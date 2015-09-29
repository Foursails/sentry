System.register(['bootstrap', 'aurelia-framework', 'AuthService'], function (_export) {
  'use strict';

  var inject, AuthService, App, ToJSONValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {
      App = (function () {
        function App(AuthService) {
          _classCallCheck(this, _App);

          this.auth = AuthService;
        }

        var _App = App;
        App = inject(AuthService)(App) || App;
        return App;
      })();

      _export('App', App);

      ToJSONValueConverter = (function () {
        function ToJSONValueConverter() {
          _classCallCheck(this, ToJSONValueConverter);
        }

        _createClass(ToJSONValueConverter, [{
          key: 'toView',
          value: function toView(obj) {
            if (obj) {
              return JSON.stringify(obj, null, 2);
            }
          }
        }]);

        return ToJSONValueConverter;
      })();

      _export('ToJSONValueConverter', ToJSONValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MkJBS2EsR0FBRyxFQU9ILG9CQUFvQjs7Ozs7Ozs7aUNBWHhCLE1BQU07Ozs7O0FBSUYsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixXQUFXLEVBQUU7OztBQUN4QixjQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN4Qjs7bUJBSlUsR0FBRztBQUFILFdBQUcsR0FEZixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHOzs7OztBQU9ILDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFDekIsZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsZ0JBQUksR0FBRyxFQUFFO0FBQ1AscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3BDO1dBQ0Y7OztlQUxVLG9CQUFvQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJ0F1dGhTZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoQXV0aFNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG5cclxuICBjb25zdHJ1Y3RvcihBdXRoU2VydmljZSkge1xyXG4gIFx0dGhpcy5hdXRoID0gQXV0aFNlcnZpY2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9KU09OVmFsdWVDb252ZXJ0ZXIge1xyXG4gIHRvVmlldyhvYmopIHtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMilcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
