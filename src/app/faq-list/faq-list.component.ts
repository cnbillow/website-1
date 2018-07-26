import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq/faq.service';
import { FaqSegment } from '../faq/faq';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.sass'],
  providers:[FaqService]
})
export class FaqListComponent implements OnInit {
  faqSections:[FaqSegment]
  req:any
  constructor(private _service:FaqService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data=>{
      this.faqSections = data as [FaqSegment];
      console.log(this.faqSections)
    })
  }

}
