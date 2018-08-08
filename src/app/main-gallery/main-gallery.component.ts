import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.sass']
})
export class MainGalleryComponent implements OnInit {

  @Input() Images
  @ViewChild('mainContent') public contentModal;
  public name: string;
  public index=0;
  public source:string;
  constructor() { }

  ngOnInit() {
    console.log(this.Images);
  }
  

    show(value:number){
        this.index=value
        this.name = this.Images[value].big;
        this.contentModal.show();
    }
    increment(event){
      //event.preventdefault();
 
    }
}
