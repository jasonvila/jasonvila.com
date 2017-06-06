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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let AllServicesService = class AllServicesService {
    // // All the API URLs
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
    }
};
AllServicesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AllServicesService);
exports.AllServicesService = AllServicesService;
//# sourceMappingURL=allServices.service.js.map