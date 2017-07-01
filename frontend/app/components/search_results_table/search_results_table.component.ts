import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'my-app',
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
	private andSelected =  false;
	private sub: any;

	constructor(private route: ActivatedRoute, private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.route.queryParams.map(params => params['term'] ).subscribe(value => this.searchTerm = value);
		var orButton = document.getElementById("orButton");
		var andButton = document.getElementById("andButton");

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
				
				div.innerHTML="";

				for(let e of this.data['Blogs']){
					console.log(e)
					if (e.content.length > 500){
						con = e.content.substring(0,500) + "...";

					} else{
						con = e.content;
					}
					var date = e.date;
					div.innerHTML = div.innerHTML + "<li class='search-entry'><a href='/searchs/"+ e.id +"' class='search-entry-link'><div class='search-entry-container'><h3 class='search-entry-title search-entry-element'>" + e.title + "</h3><h4 class='search-entry-category search-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='search-entry-category search-entry-element'>" + e.category + "</h4><p class='search-entry-content search-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				// // console.log(this.t)
				// this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
	andClicked() {
        this.andSelected = true;
        this.getAllSearchResults("AND");
    }

     orClicked() {
        this.andSelected = false;
        this.getAllSearchResults("OR");
	}
}