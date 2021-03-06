import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'pp-header',
	templateUrl: '../app/components/header/header.html',
	styleUrls: ['../app/components/header/header.css']
})

export class HeaderComponent {

    constructor(private router: Router, private route: ActivatedRoute){}
}