import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-landing-chimney',
  templateUrl: './landing-chimney.component.html',
  styleUrls: ['./landing-chimney.component.sass'],
  providers: [ServicesService]
})
export class LandingChimneyComponent implements OnInit {


	title = 'View Our Top Selling Services'
	categories = [ 'Chimney Services' ]

	private req:any
	serviceList:[ServiceItem]

	constructor(private _service:ServicesService) { }

	ngOnInit() {
		this.req = this._service.list().subscribe(data=>{
			this.serviceList = data as [ServiceItem];
		})
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}
}

