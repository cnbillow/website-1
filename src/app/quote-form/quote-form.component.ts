import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ServicesService } from '../services/service.service';
import { ModalDirective } from '../../../node_modules/ng-mdb-pro/free';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.sass']
})
export class QuoteFormComponent implements OnInit, OnDestroy{
  @Input() product:string ;
  visible=false;
  @ViewChild('basicModal') public basicModal:ModalDirective;
  show(){
    this.basicModal.show();
  }
  hide(){
    this.basicModal.hide();
  }
  constructor(private route: ActivatedRoute, private router: Router,private _service:ServicesService) { }

  optionsSelect=[]
  groupOptionsSelect=[]
  emailForm:FormGroup
  ngOnInit() {
      this.emailForm = new FormGroup({
        'name': new FormControl("",[
            Validators.required,
            Validators.maxLength(100)
        ]),
        'city': new FormControl("",[
            Validators.required,
            Validators.maxLength(100)
        ]),
        'phone': new FormControl("",[
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15)
        ]),
        'email': new FormControl("",[
            Validators.required,
            Validators.maxLength(150)
        ]),
        'message': new FormControl("",[
            Validators.required,
            Validators.maxLength(280)
        ])
      })

      this.groupOptionsSelect = [
          { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
          { value: '', label: 'SCREEN DOORS', group: true},
          { value: 'Retractable Screen Doors', label: 'Retractable Screen Doors' },
          { value: 'Sliding Screen Doors', label: 'Sliding Screen Doors' },
          { value: 'Swinging Screen Doors', label: 'Swinging Screen Doors' },
          { value: 'Pet Doors', label: 'Pet Doors' },
          { value: '', label: 'WINDOWS SCREENS', group: true},
          { value: 'Window Screen Repair', label: 'Window Screen Repair' },
          { value: 'Solar Screens', label: 'Solar Screens' },
          { value: '', label: 'CHIMNEY SERVICES', group: true },
          { value: 'Chimney Inspection', label: 'Chimney Inspection' },
          { value: 'Chimney Cleaning', label: 'Chimney Cleaning' },
          { value: 'Chimney Repair', label: 'Chimney Repair' },
          { value: 'Masonry Services', label: 'Masonry Services' },
          { value: 'Dryer Vent Cleaning', label: 'Dryer Vent Cleaning' },
          { value: '', label: 'SECURITY DOORS AND WINDOWS', group: true },
          { value: '', label: 'SECURITY DOORS', group: true},
          { value: 'Steel Security Doors', label: 'Steel Security Doors' },
          { value: 'Viewguard', label: 'Viewguard' },
          { value: 'Tru-View', label: 'Tru-View' },
          { value: 'Tru-Frame', label: 'Tru-Frame' },
          { value: 'Sliding Security Doors', label: 'Sliding Security Doors' },
          { value: '', label: 'SECURITY WINDOWS', group: true},
          { value: 'CRL Guarda Quick Escape', label: 'CRL Guarda Quick Escape' },
          { value: 'CRL Guarda Fixed', label: 'CRL Guarda Fixed' },
          //{ value: 'CRL Guarda Casement', label: 'CRL Guarda Casement' },
          { value: '', label: 'AWNINGS', group: true },
          { value: 'Retractable Patio Awnings', label: 'Retractable Patio Awnings' },
          { value: 'Drop Roll Sunscreens', label: 'Drop Roll Sunscreens' },
          
      ];

      //this.growActionBtns();

      if (screen.width < 992) {
          document.getElementById('desktop-only').style.display="none";
      }
  }

  get name(){
    return this.emailForm.get("name")
  }
  get city(){
    return this.emailForm.get("city")
  }
  get phone(){
    return this.emailForm.get("phone")
  }
  get email(){
    return this.emailForm.get("email")
  }
  get message(){
    return this.emailForm.get("message")
  }
  get option(){
    return this.emailForm.get("option")
  }
  ngOnDestroy(){

  }
  handleSubmit(event:any, emailDir:NgForm, emailForm:FormGroup){
    event.preventDefault()

    if (emailDir.submitted){
        let url = this.route.snapshot.url.pop();
        let option;
        //console.log("snapshot:"+this.route.snapshot.url.pop())
        let name = emailForm.value['name']
        let city = emailForm.value['city']
        let phone = emailForm.value['phone']
        let email = emailForm.value['email']
        let message = emailForm.value['message']
        if(url === undefined)
          option = 'Homepage';
        else
          option = url.toString();   
        this._service.create(name, city, phone, email, message, option).subscribe(data=>{
          //console.log(data);
          this.router.navigate(['/thank-you']);
        })
        emailDir.resetForm({})
    }
  }
    growActionBtns(){
      if(screen.width < 992){
        var container = document.getElementById('action-buttons-container');
        container.classList.remove('container', 'mt-3');
        container.classList.add('row');
      }
  }
}
