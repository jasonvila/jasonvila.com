import { Component } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'about',
  templateUrl: '../app/components/about/about.html',
  styleUrls: ['../app/components/about/about.css'],
  providers: [
	AllServicesService
  ]
})
export class AboutComponent {
	componentName: 'AboutComponent'
}