import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AllServicesService {
	// // All the API URLs
	private blogUrl = 'http://localhost:5000/api/blog';
	private appUrl = 'http://localhost:5000/api/app';
	private dataUrl = 'http://localhost:5000/api/data';
	private miscUrl = 'http://localhost:5000/api/misc';
	private homeUrl = 'http://localhost:5000/api/recent';
	// private blogUrl = 'http://jasonvila.com:5000/api/blog';
	// private appUrl = 'http://jasonvila.com:5000/api/app';
	// private dataUrl = 'http://jasonvila.com:5000/api/data';
	// private miscUrl = 'http://jasonvila.com:5000/api/misc';
	// private homeUrl = 'http://jasonvila.com:5000/api/recent';
	// private testOutputUrl = 'api/test';
	// private searchResultsAndURL = 'api/s_and?term=';
	// private searchResultsOrURL = 'api/s_or?term=';

	constructor(private http: Http) {}

	getAllBlogs(): Observable<any>{
		return this.http.get(this.blogUrl)
								 .map(this.extractData)
								 .catch(this.handleError);
	}

	getBlog(id: number): Observable<any> {
	 	var singleBlogUrl = this.blogUrl + "/" + id;
	 	return this.http.get(singleBlogUrl)
	 			   .map(this.extractData)
	 			   .catch(this.handleError);
	}

	getAllApps(): Observable<any>{
		return this.http.get(this.appUrl)
								 .map(this.extractData)
								 .catch(this.handleError);
	}

	getApp(id: number): Observable<any> {
	 	var singleAppUrl = this.appUrl + "/" + id;
	 	return this.http.get(singleAppUrl)
	 			   .map(this.extractData)
	 			   .catch(this.handleError);
	}

	getAllData(): Observable<any>{
		return this.http.get(this.dataUrl)
								 .map(this.extractData)
								 .catch(this.handleError);
	}

	getData(id: number): Observable<any> {
	 	var singleDataUrl = this.dataUrl + "/" + id;
	 	return this.http.get(singleDataUrl)
	 			   .map(this.extractData)
	 			   .catch(this.handleError);
	}

	getAllMisc(): Observable<any>{
		return this.http.get(this.miscUrl)
								 .map(this.extractData)
								 .catch(this.handleError);
	}

	getMisc(id: number): Observable<any> {
	 	var singleMiscUrl = this.miscUrl + "/" + id;
	 	return this.http.get(singleMiscUrl)
	 			   .map(this.extractData)
	 			   .catch(this.handleError);
	}

	getAllHome(): Observable<any>{
		return this.http.get(this.homeUrl)
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



	private extractData(res: Response) {
	 	let body = res.json();
	 	return body.objects || body || {};
	}

	// private extractTestData(res: Response) {
	// 	return res.text();
	// }

	private handleError (error: Response | any) {
	 	let errMsg: string;
	     if (error instanceof Response) {
	       const body = error.json() || '';
	       const err = body.error || JSON.stringify(body);
	       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	     } else {
	       errMsg = error.message ? error.message : error.toString();
	     }
	     console.error(errMsg);
	     return Observable.throw(errMsg);
	 }
}
