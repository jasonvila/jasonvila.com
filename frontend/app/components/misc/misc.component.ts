import { Component } from '@angular/core';
import { AllServicesService } from '../../services/allServices.service';

@Component({
  selector: 'misc',
  templateUrl: 'app/components/misc/misc.html',
  styleUrls: ['app/components/misc/misc.css'],
  providers: [
	AllServicesService
  ]
})
export class MiscComponent {
	private output = "";

	constructor(private allServicesService: AllServicesService) {}
}