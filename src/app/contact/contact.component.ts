import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public map: any = { lat: 38.577009, lng: -121.324027 };
  public mapp: any = { lat: 38.023547, lng: -121.280482 };
  zoom: number = 12;

  ngOnInit() {}

}
