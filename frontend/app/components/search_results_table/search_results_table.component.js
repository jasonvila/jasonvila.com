"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const allServices_service_1 = require("../../services/allServices.service");
let SearchResultsTableComponent = class SearchResultsTableComponent {
    constructor(route, allServicesService) {
        this.route = route;
        this.allServicesService = allServicesService;
        this.output = "";
        this.title = "Search";
        this.loading = true;
        this.andSelected = true;
    }
    ngOnInit() {
        this.route.queryParams.map(params => params['term']).subscribe(value => this.searchTerm = value);
        (this.andSelected) ? this.andClicked() : this.orClicked();
    }
    getAllSearchResults(searchType) {
        this.allServicesService.getAllSearchResults(this.searchTerm, searchType).subscribe(allSearchResults => {
            this.data = allSearchResults;
            // this.data = allSearchResults;
            // // this.t = this.data[0].title;
            var div = document.getElementById('search-list');
            var len = 0;
            var con = "";
            console.log(this.data['Blogs']);
            for (let e of this.data['Blogs']) {
                console.log(e);
                if (e.content.length > 500) {
                    con = e.content.substring(0, 500) + "...";
                }
                else {
                    con = e.content;
                }
                var date = e.date;
                div.innerHTML = div.innerHTML + "<li class='app-entry'><a href='/apps/" + e.id + "' class='app-entry-link'><div class='app-entry-container'><h3 class='app-entry-title app-entry-element'>" + e.title + "</h3><h4 class='app-entry-category app-entry-element'>" + date.substring(4, 6) + "/" + date.substring(6, 8) + "/" + date.substring(0, 4) + "</h4><h4 class='app-entry-category app-entry-element'>" + e.category + "</h4><p class='app-entry-content app-entry-element'>" + con + "</p></div></a><hr/></li>";
            }
            // // console.log(this.t)
            // this.loading = false;
        }, error => this.errorMessage = error);
    }
    andClicked() {
        this.andSelected = true;
        document.getElementById("andButton").style.background = "#E0162B";
        document.getElementById("orButton").style.background = "#0052A5";
        this.getAllSearchResults("AND");
    }
    orClicked() {
        this.andSelected = false;
        document.getElementById("andButton").style.background = "#0052A5";
        document.getElementById("orButton").style.background = "#E0162B";
        this.getAllSearchResults("OR");
    }
};
SearchResultsTableComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: '../app/components/search_results_table/search_results_table.html',
        styleUrls: ['../app/components/search_results_table/search_results_table.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            allServices_service_1.AllServicesService
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, allServices_service_1.AllServicesService])
], SearchResultsTableComponent);
exports.SearchResultsTableComponent = SearchResultsTableComponent;
//# sourceMappingURL=search_results_table.component.js.map