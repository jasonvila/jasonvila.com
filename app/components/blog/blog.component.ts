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

	constructor(private allServicesService: AllServicesService) {}
}