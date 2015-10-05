import { Redirect } from 'aurelia-router';

export class UsersViewModel {

	// equivalent to this.users = []; in the constructor
	users = [];
	name = ''

	canActivate(params) {
		if (!params.id || this.users.length > params.id) {
			return true;
		} else {
			return new Redirect('#/users');
		}
	}

	activate(params) { 
		this.activeUser = params.id;
	}

	addUser(user) {
		this.users.push({
			id: this.users.length,
			name: this.name
		});
		this.name = '';
	}
}