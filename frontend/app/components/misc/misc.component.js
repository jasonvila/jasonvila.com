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
const allServices_service_1 = require("../../services/allServices.service");
let MiscComponent = class MiscComponent {
    constructor(allServicesService) {
        this.allServicesService = allServicesService;
        this.output = "";
        this.title = "Misc";
        this.loading = true;
    }
    ngOnInit() {
        this.getAllMisc();
    }
    getAllMisc() {
        this.allServicesService.getAllMisc().subscribe(allMisc => {
            this.data = allMisc;
            this.t = this.data[0].title;
            var div = document.getElementById('misc-list');
            var len = 0;
            var con = "";
            for (let e of this.data) {
                console.log(e.content);
                if (e.content.length > 500) {
                    con = e.content.substring(0, 500) + "...";
                }
                else {
                    con = e.content;
                }
                var date = e.date;
                div.innerHTML = div.innerHTML + "<li class='misc-entry'><a href='/misc/" + e.id + "' class='misc-entry-link'><div class='misc-entry-container'><h3 class='misc-entry-title misc-entry-element'>" + e.title + "</h3><h4 class='misc-entry-category misc-entry-element'>" + date.substring(4, 6) + "/" + date.substring(6, 8) + "/" + date.substring(0, 4) + "</h4><h4 class='misc-entry-category misc-entry-element'>" + e.category + "</h4><p class='misc-entry-content misc-entry-element'>" + con + "</p></div></a><hr/></li>";
            }
            console.log(this.t);
            this.loading = false;
        }, error => this.errorMessage = error);
    }
};
MiscComponent = __decorate([
    core_1.Component({
        selector: 'misc',
        templateUrl: 'app/components/misc/misc.html',
        styleUrls: ['app/components/misc/misc.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            allServices_service_1.AllServicesService
        ]
    }),
    __metadata("design:paramtypes", [allServices_service_1.AllServicesService])
], MiscComponent);
exports.MiscComponent = MiscComponent;
//# sourceMappingURL=misc.component.js.map