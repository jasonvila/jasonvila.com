import { Component, ViewEncapsulation } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'apps',
  templateUrl: 'app/components/apps/apps.html',
  styleUrls: ['app/components/apps/apps.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class AppsComponent {
	private output = "";
	errorMessage: string;
	title = "Apps";
	data: any[];
	loading = true;
	t: string;

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllApps();
	}

	getAllApps(){
		this.allServicesService.getAllApps().subscribe(
			allApps => {
				this.data = allApps;
				this.t = this.data[0].title;
				var div = document.getElementById('app-list');
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
					div.innerHTML = div.innerHTML + "<li class='app-entry'><a href='/apps/"+ e.id +"' class='app-entry-link'><div class='app-entry-container'><h3 class='app-entry-title app-entry-element'>" + e.title + "</h3><h4 class='app-entry-category app-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='app-entry-category app-entry-element'>" + e.category + "</h4><h4 class='app-entry-category app-entry-element'>Github: " + e.link + "</h4><p class='app-entry-content app-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				console.log(this.t)
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}