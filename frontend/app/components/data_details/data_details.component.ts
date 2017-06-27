import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'data-details',
  templateUrl: 'app/components/data_details/data_details.html',
  styleUrls: ['app/components/data_details/data_details.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class DataDetailsComponent {
	private output = "";
	errorMessage: string;
	title = "Data";
	data: any[];
	loading = true;
	t: string;

	id: number;
	private sub: any;

	constructor(private route: ActivatedRoute, private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.getData()
		})
	}

	getData(){
		this.allServicesService.getData(this.id).subscribe(
			d => {
				this.data = d;
				var div = document.getElementById('container');
				for(let e of this.data){
					var date = e.date;
					div.innerHTML = "<h3>" + e.title + "</h3><h4 class='data-entry-category data-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4>" + e.category+ "</h4><br/><p>" + e.content + "<br/><br/></br></p>";
				}
				
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}