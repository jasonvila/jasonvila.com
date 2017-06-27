import { Component, ViewEncapsulation } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'blog',
  templateUrl: 'app/components/blog/blog.html',
  styleUrls: ['app/components/blog/blog.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class BlogComponent {
	private output = "";
	errorMessage: string;
	title = "Blogs";
	data: any[];
	loading = true;
	t: string;

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllBlogs();
	}

	getAllBlogs(){
		this.allServicesService.getAllBlogs().subscribe(
			allBlogs => {
				this.data = allBlogs;
				this.t = this.data[0].title;
				var div = document.getElementById('blog-list');
				var len = 0;
				var con = "";
				for(let e of this.data){
					console.log(e.content)
					if (e.content.length > 500){
						con = e.content.substring(0,500) + "...";

					} else{
						con = e.content;
					}
					var date = e.date
					div.innerHTML = div.innerHTML + "<li class='blog-entry'><a href='/blog/"+ e.id +"' class='blog-entry-link'><div class='blog-entry-container'><h3 class='blog-entry-title blog-entry-element'>" + e.title + "</h3><h4 class='blog-entry-category blog-entry-element'>" + date.substring(4,6) + "/" + date.substring(6,8) + "/" + date.substring(0,4) + "</h4><h4 class='blog-entry-category blog-entry-element'>" + e.category + "</h4><p class='blog-entry-content blog-entry-element'>" + con + "</p></div></a><hr/></li>";
				}
				console.log(this.t)
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}