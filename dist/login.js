System.register(['aurelia-framework', 'AuthService'], function (_export) {
  'use strict';

  var inject, AuthService, Login;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {
      Login = (function () {
        function Login(AuthService) {
          var _this = this;

          _classCallCheck(this, _Login);

          this.login = function () {
            if (_this.username && _this.password) {
              AuthService.login(_this.username, _this.password);
            } else {
              _this.error = 'Please enter a username and password.';
            }
          };
        }

        _createClass(Login, [{
          key: 'activate',
          value: function activate() {
            this.username = '';
            this.password = '';
            this.error = '';
          }
        }]);

        var _Login = Login;
        Login = inject(AuthService)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFJYSxLQUFLOzs7Ozs7OztpQ0FKVCxNQUFNOzs7OztBQUlGLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosV0FBVyxFQUFFOzs7OztBQUl2QixjQUFJLENBQUMsS0FBSyxHQUFHLFlBQU07QUFDakIsZ0JBQUksTUFBSyxRQUFRLElBQUksTUFBSyxRQUFRLEVBQUU7QUFDbEMseUJBQVcsQ0FBQyxLQUFLLENBQUMsTUFBSyxRQUFRLEVBQUUsTUFBSyxRQUFRLENBQUMsQ0FBQTthQUNoRCxNQUFNO0FBQ0wsb0JBQUssS0FBSyxHQUFHLHVDQUF1QyxDQUFDO2FBQ3REO1dBQ0YsQ0FBQTtTQUNGOztxQkFiVSxLQUFLOztpQkFlUixvQkFBRztBQUNULGdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1dBQ2pCOzs7cUJBbkJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICdBdXRoU2VydmljZSc7XHJcblxyXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgTG9naW4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihBdXRoU2VydmljZSkge1xyXG5cclxuICAgIC8vIE9yLCBpZiB3ZSB3YW50IHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIHRvIHRoZSBmdW5jdGlvbiwgXHJcbiAgICAvLyB3ZSBjYW4gY2FsbCBpdCB3aXRoaW4gYW5vdGhlciBtZXRob2Qgb24gb3VyIHZpZXcgbW9kZWwuXHJcbiAgICB0aGlzLmxvZ2luID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSAnJztcclxuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcclxuICAgIHRoaXMuZXJyb3IgPSAnJztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
