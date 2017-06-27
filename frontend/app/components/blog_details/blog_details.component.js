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
let BlogDetailsComponent = class BlogDetailsComponent {
    constructor(route, allServicesService) {
        this.route = route;
        this.allServicesService = allServicesService;
        this.output = "";
        this.title = "Blogs";
        this.loading = true;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.getBlog();
        });
    }
    getBlog() {
        this.allServicesService.getBlog(this.id).subscribe(blog => {
            this.data = blog;
            var div = document.getElementById('container');
            for (let e of this.data) {
                div.innerHTML = "<h3>" + e.title + "</h3><h4>" + e.category + "</h4><p>" + e.content + "<br/><br/></br></p>";
            }
            this.loading = false;
        }, error => this.errorMessage = error);
    }
};
BlogDetailsComponent = __decorate([
    core_1.Component({
        selector: 'blog-details',
        templateUrl: 'app/components/blog_details/blog_details.html',
        styleUrls: ['app/components/blog_details/blog_details.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            allServices_service_1.AllServicesService
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, allServices_service_1.AllServicesService])
], BlogDetailsComponent);
exports.BlogDetailsComponent = BlogDetailsComponent;
//# sourceMappingURL=blog_details.component.js.map