import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'my-app',
  template: `<div class="content">
  			<div class="content-header">
  			</div>
  			<!-- Routed views go here -->
			<div class="content-body">
			<router-outlet></router-outlet>
			</div>
			</div>`,
})

export class AppComponent {
	componentName:'AppComponent'
}