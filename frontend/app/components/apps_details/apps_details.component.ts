import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'apps-details',
  templateUrl: 'app/components/apps_details/apps_details.html',
  styleUrls: ['app/components/apps_details/apps_details.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class AppsDetailsComponent {
	private output = "";
	errorMessage: string;
	title = "Apps";
	data: any[];
	loading = true;
	t: string;

	id: number;
	private sub: any;

	constructor(private route: ActivatedRoute, private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.getApp()
		})
	}

	getApp(){
		this.allServicesService.getApp(this.id).subscribe(
			app => {
				this.data = app;
				var div = document.getElementById('container');
				for(let e of this.data){
					var date = e.date;
					div.innerHTML = "<h3>" + e.title + "</h3><h4 class='app-entry-category app-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4>" + e.category+ "</h4><a href='" + e.link + "' class='app-entry-link'><h4 class='app-entry-category app-entry-element'>Github: " + e.link + "</h4></a><br/><p>" + e.content + "<br/><br/></br></p>";
				}
				
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}