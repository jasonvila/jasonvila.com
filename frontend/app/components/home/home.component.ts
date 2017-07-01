import { Component, ViewEncapsulation } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'home',
  templateUrl: '../app/components/home/home.html',
  styleUrls: ['../app/components/home/home.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class HomeComponent {
	private output = "";
	errorMessage: string;
	title = "Home";
	data: any[];
	loading = true;
	t: string;

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllHome();
	}

	getAllHome(){
		this.allServicesService.getAllHome().subscribe(
			allHome => {
				this.data = allHome;
				this.t = this.data[0].title;
				var div = document.getElementById('home-list');
				var len = 0;
				var con = "";
				for(let e of this.data){
					console.log(e.content)
					if (e.content.length > 500){
						con = e.content.substring(0,500) + "...";

					} else{
						con = e.content;
					}
					var date = e.date;
					div.innerHTML = div.innerHTML + "<li class='home-entry'><a href='/home/"+ e.id +"' class='home-entry-link'><div class='home-entry-container'><h3 class='home-entry-title home-entry-element'>" + e.title + "</h3><h4 class='home-entry-category home-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='home-entry-category home-entry-element'>" + e.category + "</h4><p class='home-entry-content home-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				console.log(this.t)
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}