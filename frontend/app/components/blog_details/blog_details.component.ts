import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'blog-details',
  templateUrl: 'app/components/blog_details/blog_details.html',
  styleUrls: ['app/components/blog_details/blog_details.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
	AllServicesService
  ]
})
export class BlogDetailsComponent {
	private output = "";
	errorMessage: string;
	title = "Blogs";
	data: any[];
	loading = true;
	t: string;

	id: number;
	private sub: any;

	constructor(private route: ActivatedRoute, private allServicesService: AllServicesService) {}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.getBlog()
		})
	}

	getBlog(){
		this.allServicesService.getBlog(this.id).subscribe(
			blog => {
				this.data = blog;
				var div = document.getElementById('container');
				for(let e of this.data){
					div.innerHTML = "<h3>" + e.title + "</h3><h4>" + e.category+ "</h4><p>" + e.content + "<br/><br/></br></p>";
				}
				
				this.loading = false;
			}, error => this.errorMessage = <any>error)
	}
}