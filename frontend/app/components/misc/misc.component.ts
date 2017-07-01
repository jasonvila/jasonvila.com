import { Component, ViewEncapsulation } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'misc',
  templateUrl: '../app/components/misc/misc.html',
  styleUrls: ['../app/components/misc/misc.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class MiscComponent {
	private output = "";
	errorMessage: string;
	title = "Misc";
	data: any[];
	loading = true;
	t: string;

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllMisc();
	}

	getAllMisc(){
		this.allServicesService.getAllMisc().subscribe(
			allMisc => {
				this.data = allMisc;
				this.t = this.data[0].title;
				var div = document.getElementById('misc-list');
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
					div.innerHTML = div.innerHTML + "<li class='misc-entry'><a href='/misc/"+ e.id +"' class='misc-entry-link'><div class='misc-entry-container'><h3 class='misc-entry-title misc-entry-element'>" + e.title + "</h3><h4 class='misc-entry-category misc-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='misc-entry-category misc-entry-element'>" + e.category + "</h4><h4 class='misc-entry-category misc-entry-element'>Github: " + e.link + "</h4><p class='misc-entry-content misc-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				console.log(this.t)
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}