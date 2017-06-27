"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const primeng_1 = require("primeng/primeng");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const header_component_1 = require("./components/header/header.component");
const about_component_1 = require("./components/about/about.component");
const home_component_1 = require("./components/home/home.component");
const apps_component_1 = require("./components/apps/apps.component");
const misc_component_1 = require("./components/misc/misc.component");
const data_component_1 = require("./components/data/data.component");
const blog_component_1 = require("./components/blog/blog.component");
const blog_details_component_1 = require("./components/blog_details/blog_details.component");
const apps_details_component_1 = require("./components/apps_details/apps_details.component");
const data_details_component_1 = require("./components/data_details/data_details.component");
const not_found_component_1 = require("./components/page_not_found/not_found.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            primeng_1.DataTableModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'apps',
                    component: apps_component_1.AppsComponent
                },
                {
                    path: 'apps/:id',
                    component: apps_details_component_1.AppsDetailsComponent
                },
                {
                    path: 'blog',
                    component: blog_component_1.BlogComponent
                },
                {
                    path: 'blog/:id',
                    component: blog_details_component_1.BlogDetailsComponent
                },
                {
                    path: 'data',
                    component: data_component_1.DataComponent
                },
                {
                    path: 'data/:id',
                    component: data_details_component_1.DataDetailsComponent
                },
                {
                    path: 'misc',
                    component: misc_component_1.MiscComponent
                },
                {
                    path: '404',
                    component: not_found_component_1.PageNotFoundComponent
                },
                {
                    path: '**',
                    component: not_found_component_1.PageNotFoundComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            apps_component_1.AppsComponent,
            misc_component_1.MiscComponent,
            data_component_1.DataComponent,
            blog_component_1.BlogComponent,
            blog_details_component_1.BlogDetailsComponent,
            apps_details_component_1.AppsDetailsComponent,
            data_details_component_1.DataDetailsComponent,
            not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map