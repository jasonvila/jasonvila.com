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
    // private blogUrl = 'http://jasonvila.com:5000/api/blog';
    // private appUrl = 'http://jasonvila.com:5000/api/app';
    // private dataUrl = 'http://jasonvila.com:5000/api/data';
    // private miscUrl = 'http://jasonvila.com:5000/api/misc';
    // private testOutputUrl = 'api/test';
    // private searchResultsAndURL = 'api/s_and?term=';
    // private searchResultsOrURL = 'api/s_or?term=';
    constructor(http) {
        this.http = http;
        // // All the API URLs
        this.blogUrl = 'http://localhost:5000/api/blog';
        this.appUrl = 'http://localhost:5000/api/app';
        this.dataUrl = 'http://localhost:5000/api/data';
        this.miscUrl = 'http://localhost:5000/api/misc';
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
    getAllApps() {
        return this.http.get(this.appUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getApp(id) {
        var singleAppUrl = this.appUrl + "/" + id;
        return this.http.get(singleAppUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getAllData() {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getData(id) {
        var singleDataUrl = this.dataUrl + "/" + id;
        return this.http.get(singleDataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getAllMisc() {
        return this.http.get(this.miscUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    // getTestOutput(): Observable<any> {
    // 	return this.http.get(this.testOutputUrl)
    // 			   .map(this.extractTestData)
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