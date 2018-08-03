import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-gallery',
  templateUrl: './footer-gallery.component.html',
  styleUrls: ['./footer-gallery.component.sass']
})
export class FooterGalleryComponent implements OnInit {
  @Input() Images
  @ViewChild('content') public contentModal;
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

