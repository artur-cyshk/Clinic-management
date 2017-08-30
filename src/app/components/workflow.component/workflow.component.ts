import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LocalStorageService } from '../../services';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  currentStateName: string;

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
		 this.router.events
	     .filter(event => event instanceof RoutesRecognized)
	     .subscribe(this.routeChangedHandler.bind(this));
	}

  routeChangedHandler(event: any) {
  	 this.currentStateName = event.urlAfterRedirects.substring(1, event.urlAfterRedirects.length);
  }
}
