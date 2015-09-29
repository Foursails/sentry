System.register(['aurelia-framework', 'aurelia-http-client', 'config'], function (_export) {
	'use strict';

	var Aurelia, inject, HttpClient, config, AuthService;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			Aurelia = _aureliaFramework.Aurelia;
			inject = _aureliaFramework.inject;
		}, function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}, function (_config) {
			config = _config['default'];
		}],
		execute: function () {
			AuthService = (function () {
				function AuthService(Aurelia, HttpClient) {
					_classCallCheck(this, _AuthService);

					this.session = null;

					HttpClient.configure(function (http) {
						http.withBaseUrl(config.baseUrl);
					});

					this.http = HttpClient;
					this.app = Aurelia;

					this.session = JSON.parse(localStorage[config.tokenName] || null);
				}

				_createClass(AuthService, [{
					key: 'login',
					value: function login(username, password) {
						var _this = this;

						this.http.post(config.loginUrl, { username: username, password: password }).then(function (response) {
							return response.content;
						}).then(function (session) {
							localStorage[config.tokenName] = JSON.stringify(session);

							_this.session = session;

							_this.app.setRoot('app');
						});
					}
				}, {
					key: 'logout',
					value: function logout() {
						localStorage[config.tokenName] = null;

						this.session = null;

						this.app.setRoot('login');
					}
				}, {
					key: 'isAuthenticated',
					value: function isAuthenticated() {
						return this.session !== null;
					}
				}, {
					key: 'can',
					value: function can(permission) {
						return true;
					}
				}]);

				var _AuthService = AuthService;
				AuthService = inject(Aurelia, HttpClient)(AuthService) || AuthService;
				return AuthService;
			})();

			_export('default', AuthService);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FLcUIsV0FBVzs7Ozs7Ozs7K0JBTHZCLE9BQU87OEJBQUUsTUFBTTs7bUNBQ2YsVUFBVTs7Ozs7QUFJRSxjQUFXO0FBT3BCLGFBUFMsV0FBVyxDQU9uQixPQUFPLEVBQUUsVUFBVSxFQUFFOzs7VUFMakMsT0FBTyxHQUFHLElBQUk7O0FBTWIsZUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN2QixVQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7O0FBRU4sU0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsU0FBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7O0FBRW5CLFNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2xFOztpQkFoQm1CLFdBQVc7O1lBa0IxQixlQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7OztBQUNuQixVQUFJLENBQUMsSUFBSSxDQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLENBQUMsQ0FDN0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtjQUFLLFFBQVEsQ0FBQyxPQUFPO09BQUEsQ0FBQyxDQUNwQyxJQUFJLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFHckIsbUJBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFHekQsYUFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUd2QixhQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDeEIsQ0FBQyxDQUFDO01BQ1A7OztZQUVLLGtCQUFHO0FBR1Isa0JBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUd0QyxVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFHcEIsVUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7TUFDekI7OztZQUVjLDJCQUFHO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7TUFDN0I7OztZQUVFLGFBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxJQUFJLENBQUM7TUFDWjs7O3VCQXJEbUIsV0FBVztBQUFYLGVBQVcsR0FEL0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FDUCxXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVc7OztzQkFBWCxXQUFXIiwiZmlsZSI6IkF1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJztcclxuXHJcbkBpbmplY3QoQXVyZWxpYSwgSHR0cENsaWVudClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuXHRzZXNzaW9uID0gbnVsbFxyXG5cclxuXHQvLyBBcyBzb29uIGFzIHRoZSBBdXRoU2VydmljZSBpcyBjcmVhdGVkLCB3ZSBxdWVyeSBsb2NhbCBzdG9yYWdlIHRvXHJcblx0Ly8gc2VlIGlmIHRoZSBsb2dpbiBpbmZvcm1hdGlvbiBoYXMgYmVlbiBzdG9yZWQuIElmIHNvLCB3ZSBpbW1lZGlhdGVseVxyXG5cdC8vIGxvYWQgaXQgaW50byB0aGUgc2Vzc2lvbiBvYmplY3Qgb24gdGhlIEF1dGhTZXJ2aWNlLlxyXG5cdGNvbnN0cnVjdG9yKEF1cmVsaWEsIEh0dHBDbGllbnQpIHtcclxuXHRcdEh0dHBDbGllbnQuY29uZmlndXJlKGh0dHAgPT4ge1xyXG5cdCAgICAgIFx0aHR0cC53aXRoQmFzZVVybChjb25maWcuYmFzZVVybCk7XHJcbiAgICBcdH0pO1xyXG5cclxuXHRcdHRoaXMuaHR0cCA9IEh0dHBDbGllbnQ7XHJcblx0XHR0aGlzLmFwcCA9IEF1cmVsaWE7XHJcblxyXG5cdFx0dGhpcy5zZXNzaW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbY29uZmlnLnRva2VuTmFtZV0gfHwgbnVsbCk7XHJcblx0fVxyXG5cclxuXHRsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICBcdC5wb3N0KGNvbmZpZy5sb2dpblVybCwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcclxuICAgICAgICBcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuY29udGVudClcclxuICAgICAgICBcdC50aGVuKChzZXNzaW9uKSA9PiB7XHJcblxyXG5cdCAgICBcdFx0Ly8gU2F2ZSB0byBsb2NhbFN0b3JhZ2VcclxuXHQgICAgXHRcdGxvY2FsU3RvcmFnZVtjb25maWcudG9rZW5OYW1lXSA9IEpTT04uc3RyaW5naWZ5KHNlc3Npb24pO1xyXG5cclxuXHQgICAgXHRcdC8vIC4uIGFuZCB0byB0aGUgc2Vzc2lvbiBvYmplY3RcclxuXHQgICAgXHRcdHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XHJcblxyXG5cdCAgICBcdFx0Ly8gLi4gYW5kIHNldCByb290IHRvIGFwcC5cclxuXHQgICAgXHRcdHRoaXMuYXBwLnNldFJvb3QoJ2FwcCcpO1xyXG5cdCAgICBcdH0pO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KCkge1xyXG5cclxuXHRcdC8vIENsZWFyIGZyb20gbG9jYWxTdG9yYWdlXHJcblx0XHRsb2NhbFN0b3JhZ2VbY29uZmlnLnRva2VuTmFtZV0gPSBudWxsO1xyXG5cclxuXHRcdC8vIC4uIGFuZCBmcm9tIHRoZSBzZXNzaW9uIG9iamVjdFxyXG5cdFx0dGhpcy5zZXNzaW9uID0gbnVsbDtcclxuXHJcblx0XHQvLyAuLiBhbmQgc2V0IHJvb3QgdG8gbG9naW4uXHJcblx0XHR0aGlzLmFwcC5zZXRSb290KCdsb2dpbicpXHJcblx0fVxyXG5cdFxyXG5cdGlzQXV0aGVudGljYXRlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlc3Npb24gIT09IG51bGw7XHJcblx0fVxyXG5cclxuXHRjYW4ocGVybWlzc2lvbikge1xyXG5cdFx0cmV0dXJuIHRydWU7IC8vIHdoeSBub3Q/XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
