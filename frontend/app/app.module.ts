import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AppsComponent } from './components/apps/apps.component';
import { MiscComponent } from './components/misc/misc.component';
import { DataComponent } from './components/data/data.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent} from './components/blog_details/blog_details.component';
import { AppsDetailsComponent} from './components/apps_details/apps_details.component';
import { DataDetailsComponent} from './components/data_details/data_details.component';
import { MiscDetailsComponent} from './components/misc_details/misc_details.component';
import { PageNotFoundComponent } from './components/page_not_found/not_found.component';

@NgModule({
  imports: [
    DataTableModule,
  	BrowserModule,
    HttpModule,
  	RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
  		{ 
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'apps',
        component: AppsComponent
      },
      {
        path: 'apps/:id',
        component: AppsDetailsComponent
      },
      { 
        path: 'blog',
        component: BlogComponent
      },
      { 
        path: 'blog/:id',
        component: BlogDetailsComponent
      },
      { 
        path: 'data',
        component: DataComponent
      },
      { 
        path: 'data/:id',
        component: DataDetailsComponent
      },
      { 
        path: 'misc',
        component: MiscComponent
      },
      { 
        path: 'misc/:id',
        component: MiscDetailsComponent
      },
      {
        path: '404',
        component: PageNotFoundComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
  	])
  ],
  declarations: [
  	AppComponent,
  	HeaderComponent,
  	AboutComponent,
    HomeComponent,
    AppsComponent,
    MiscComponent,
    DataComponent,
    BlogComponent,
    BlogDetailsComponent,
    AppsDetailsComponent,
    DataDetailsComponent,
    MiscDetailsComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  componentName: 'AppModule'
}