import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.sass']
})
export class MainGalleryComponent implements OnInit {

  @Input() Images
  @ViewChild('mainContent') public contentModal;
  public name: string;

  public source:string;
  constructor() { }

  ngOnInit() {
    console.log(this.Images);
  }
  

    show(value:string){
        this.name = value;
        this.contentModal.show();
    }
}
