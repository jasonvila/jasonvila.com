import { Component } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'apps',
  templateUrl: 'app/components/apps/apps.html',
  styleUrls: ['app/components/apps/apps.css'],
  providers: [
	AllServicesService
  ]
})
export class AppsComponent {
	private output = "";

	constructor(private allServicesService: AllServicesService) {}
}