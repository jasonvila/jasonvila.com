import { Component } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'blog',
  templateUrl: 'app/components/blog/blog.html',
  styleUrls: ['app/components/blog/blog.css'],
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

	constructor(private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.getAllBlogs();
	}

	getAllBlogs(){
		this.allServicesService.getAllBlogs().subscribe(
			allBlogs => {
				this.data = allBlogs;
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}