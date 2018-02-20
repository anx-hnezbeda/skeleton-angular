import {Component, OnInit} from '@angular/core';

import {UserResource, User} from "app/services";

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userResource: UserResource) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userResource.remove({pk: id}).$promise.then(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userResource.query().$promise.then(users => { this.users = users; });
    }
}