import { Component } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'data',
  templateUrl: 'app/components/data/data.html',
  styleUrls: ['app/components/data/data.css'],
  providers: [
	AllServicesService
  ]
})
export class DataComponent {
	private output = "";

	constructor(private allServicesService: AllServicesService) {}
}