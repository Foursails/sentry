import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';

@inject(AuthService)
export class App {

  constructor(AuthService) {
  	this.auth = AuthService;
  }

  configureRouter(config, router) {
    config.map([
      { route: [''], name: 'default', moduleId: 'default', nav: true, title:'Welcome' }
      , { route: ['users', 'users/:id'],  name: 'users', moduleId: 'users', nav: true,  href: 'users', title:'Attendees' }
    ]);

    this.router = router;
  }
}

// export class ToJSONValueConverter {
//   toView(obj) {
//     if (obj) {
//       return JSON.stringify(obj, null, 2)
//     }
//   }
// }