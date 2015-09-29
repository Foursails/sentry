System.register(['AuthService'], function (_export) {
  'use strict';

  var AuthService;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function () {
      var auth = aurelia.container.get(AuthService);
      var root = auth.isAuthenticated() ? 'app' : 'login';
      aurelia.setRoot(root);
    });
  }

  return {
    setters: [function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNsQyxXQUFPLENBQUMsR0FBRyxDQUNQLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQUM7O0FBS3hCLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUN6QixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QyxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNwRCxhQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztHQUNMIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcblx0YXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpO1xyXG5cclxuICAvLyBBZnRlciBzdGFydGluZyB0aGUgYXVyZWxpYSwgd2UgY2FuIHJlcXVlc3QgdGhlIEF1dGhTZXJ2aWNlIGRpcmVjdGx5XHJcbiAgLy8gZnJvbSB0aGUgREkgY29udGFpbmVyIG9uIHRoZSBhdXJlbGlhIG9iamVjdC4gV2UgY2FuIHRoZW4gc2V0IHRoZSBcclxuICAvLyBjb3JyZWN0IHJvb3QgYnkgcXVlcnlpbmcgdGhlIEF1dGhTZXJ2aWNlJ3MgaXNBdXRoZW50aWNhdGVkIG1ldGhvZC5cclxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiB7XHJcblx0ICBcdHZhciBhdXRoID0gYXVyZWxpYS5jb250YWluZXIuZ2V0KEF1dGhTZXJ2aWNlKTtcclxuXHQgICAgbGV0IHJvb3QgPSBhdXRoLmlzQXV0aGVudGljYXRlZCgpID8gJ2FwcCcgOiAnbG9naW4nO1xyXG5cdCAgICBhdXJlbGlhLnNldFJvb3Qocm9vdCk7XHJcbiAgXHR9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
