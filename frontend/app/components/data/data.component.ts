import { Component, ViewEncapsulation } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'data',
  templateUrl: '../app/components/data/data.html',
  styleUrls: ['../app/components/data/data.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class DataComponent {
	private output = "";
	errorMessage: string;
	title = "Data";
	data: any[];
	loading = true;
	t: string;

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllData();
	}

	getAllData(){
		this.allServicesService.getAllData().subscribe(
			allData => {
				this.data = allData;
				this.t = this.data[0].title;
				var div = document.getElementById('data-list');
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
					div.innerHTML = div.innerHTML + "<li class='data-entry'><a href='/data/"+ e.id +"' class='data-entry-link'><div class='data-entry-container'><h3 class='data-entry-title data-entry-element'>" + e.title + "</h3><h4 class='data-entry-category data-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='data-entry-category data-entry-element'>" + e.category + "</h4><p class='data-entry-content data-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				console.log(this.t)
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}