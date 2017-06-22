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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let AllServicesService = class AllServicesService {
    // private statesUrl = 'api/states';
    // private partiesUrl = 'api/parties';
    // private candidatesUrl = 'api/candidates';
    // private electionsUrl = 'api/elections';
    // private stateDetailsUrl = 'api/state';
    // private partyDetailsUrl = 'api/party';
    // private candidateDetailsUrl = 'api/candidate';
    // private electionDetailsUrl = 'api/election';
    // private testOutputUrl = 'api/test';
    // private imageUrl = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDnOT53CCV948mcKY6rawsUNAAZqOoRKFU&cx=002168208795225832214:dup1kwhfope&searchType=image&imgSize=medium&q=';
    // private searchResultsAndURL = 'api/s_and?term=';
    // private searchResultsOrURL = 'api/s_or?term=';
    constructor(http) {
        this.http = http;
        // // All the API URLs
        this.blogUrl = 'http://localhost:5000/api/blog';
    }
    getAllBlogs() {
        return this.http.get(this.blogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getBlog(id) {
        var singleBlogUrl = this.blogUrl + "/" + id;
        return this.http.get(singleBlogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    // getAllStates(): Observable<any> {
    // 	return this.http.get(this.statesUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getAllParties(): Observable<any> {
    // 	return this.http.get(this.partiesUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getAllCandidates(): Observable<any> {
    // 	return this.http.get(this.candidatesUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getAllElections(): Observable<any> {
    // 	return this.http.get(this.electionsUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getStateDetails(id: number): Observable<any> {
    // 	var singleStateUrl = this.stateDetailsUrl + "/" + id;
    // 	return this.http.get(singleStateUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getPartyDetails(id: number): Observable<any> {
    // 	var singlePartyUrl = this.partyDetailsUrl + "/" + id;
    // 	return this.http.get(singlePartyUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getCandidateDetails(id: number): Observable<any> {
    // 	var singleCandidateUrl = this.candidateDetailsUrl + "/" + id;
    // 	return this.http.get(singleCandidateUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getElectionDetails(id: number): Observable<any> {
    // 	var singleElectionUrl = this.electionDetailsUrl + "/" + id;
    // 	return this.http.get(singleElectionUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getTestOutput(): Observable<any> {
    // 	return this.http.get(this.testOutputUrl)
    // 			   .map(this.extractTestData)
    // 			   .catch(this.handleError);
    // }
    // getImageData(query: string):  Observable<any> {
    // 	var queryUrl = this.imageUrl + query;
    // 	return this.http.get(queryUrl)
    // 			   .map(this.extractData)
    // 			   .catch(this.handleError);
    // }
    // getAllSearchResults(str: string, searchType : string): Observable<any> {
    // 	var replaced : string;
    // 	if(str != null){
    // 		replaced = str.replace('/ /g','%20');
    // 	}
    // 	var searchURL : string;
    // 	if(searchType === "AND"){
    // 		searchURL = this.searchResultsAndURL + replaced;
    // 		return this.http.get(searchURL)
    // 				   .map(this.extractData)
    // 				   .catch(this.handleError);
    // 	}
    // 	else{
    // 		searchURL = this.searchResultsOrURL + replaced;
    // 		return this.http.get(searchURL)
    // 					   .map(this.extractData)
    // 					   .catch(this.handleError);
    // 	}
    // }
    extractData(res) {
        let body = res.json();
        return body.objects || body || {};
    }
    // private extractTestData(res: Response) {
    // 	return res.text();
    // }
    handleError(error) {
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
AllServicesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AllServicesService);
exports.AllServicesService = AllServicesService;
//# sourceMappingURL=allServices.service.js.map