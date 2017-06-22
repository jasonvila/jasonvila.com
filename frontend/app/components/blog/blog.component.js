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
let BlogComponent = class BlogComponent {
    constructor(allServicesService) {
        this.allServicesService = allServicesService;
        this.output = "";
        this.title = "Blogs";
        this.loading = true;
    }
    ngOnInit() {
        this.getAllBlogs();
    }
    getAllBlogs() {
        this.allServicesService.getAllBlogs().subscribe(allBlogs => {
            this.data = allBlogs;
            this.t = this.data[0].title;
            var div = document.getElementById('blog-list');
            for (let e of this.data) {
                console.log(e);
                div.innerHTML = div.innerHTML + "<li class='blog-entry'><a href='/blog' class='blog-entry-link'><div class='blog-entry-container'><h3 class='blog-entry-title blog-entry-element'>" + e.title + "</h3><h4 class='blog-entry-category blog-entry-element'>" + e.category + "</h4><div class='blog-entry-content blog-entry-element'>" + e.content + "</div></div></a><hr/></li>";
            }
            console.log(this.t);
            this.loading = false;
        }, error => this.errorMessage = error);
    }
    addListItem(data) { }
    s() {
        return "<li ><a ><div ><h3 >" + data.title + "</h3><h4 >" + data.category + "</h4><div >" + data.content + "</div></div></a><hr/></li>";
    }
};
BlogComponent = __decorate([
    core_1.Component({
        selector: 'blog',
        templateUrl: 'app/components/blog/blog.html',
        styleUrls: ['app/components/blog/blog.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            allServices_service_1.AllServicesService
        ]
    }),
    __metadata("design:paramtypes", [allServices_service_1.AllServicesService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map