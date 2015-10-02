import AuthService from 'AuthService';
import 'bootstrap';

export function configure(aurelia) {
	aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // After starting the aurelia, we can request the AuthService directly
  // from the DI container on the aurelia object. We can then set the 
  // correct root by querying the AuthService's isAuthenticated method.
  aurelia.start().then(() => {
	  	let auth = aurelia.container.get(AuthService);
	    let root = auth.isAuthenticated() ? 'app' : 'login';
	    aurelia.setRoot(root);
  	});
}