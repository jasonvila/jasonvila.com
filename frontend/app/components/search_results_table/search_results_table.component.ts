import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'search',
  templateUrl: '../app/components/search_results_table/search_results_table.html',
  styleUrls: ['../app/components/search_results_table/search_results_table.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class SearchResultsTableComponent {
	private output = "";
	errorMessage: string;
	title = "Search";
	data: any[];
	loading = true;
	t: string;

	private searchTerm: string;
	private andSelected =  true;
	private sub: any;

	constructor(private route: ActivatedRoute, private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.route.queryParams.map(params => params['term'] ).subscribe(value => this.searchTerm = value);
		(this.andSelected) ? this.andClicked() : this.orClicked();
	}

	getAllSearchResults(searchType: string){
		this.allServicesService.getAllSearchResults(this.searchTerm, searchType).subscribe(
			allSearchResults => {
				this.data = allSearchResults;
				// this.data = allSearchResults;
				// // this.t = this.data[0].title;
				var div = document.getElementById('search-list');
				var len = 0;
				var con = "";
				console.log(this.data['Blogs'])
				for(let e of this.data['Blogs']){
					console.log(e)
					if (e.content.length > 500){
						con = e.content.substring(0,500) + "...";

					} else{
						con = e.content;
					}
					var date = e.date;
					div.innerHTML = div.innerHTML + "<li class='app-entry'><a href='/apps/"+ e.id +"' class='app-entry-link'><div class='app-entry-container'><h3 class='app-entry-title app-entry-element'>" + e.title + "</h3><h4 class='app-entry-category app-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='app-entry-category app-entry-element'>" + e.category + "</h4><p class='app-entry-content app-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				// // console.log(this.t)
				// this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
	andClicked() {
        this.andSelected = true;
        (<HTMLButtonElement>document.getElementById("andButton")).style.background = "#E0162B";
        (<HTMLButtonElement>document.getElementById("orButton")).style.background = "#0052A5";
        this.getAllSearchResults("AND");
    }

     orClicked() {
        this.andSelected = false;
        (<HTMLButtonElement>document.getElementById("andButton")).style.background = "#0052A5";
        (<HTMLButtonElement>document.getElementById("orButton")).style.background = "#E0162B";
        this.getAllSearchResults("OR");
	}
}