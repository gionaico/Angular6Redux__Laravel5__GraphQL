import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Article, ContactService } from '../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  //styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  article: Article = {} as Article;
  contactForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    // use the FormBuilder to create a form group
    this.contactForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^([a-zA-Z]|\s)*$'),Validators.minLength(4),Validators.maxLength(15)]],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', [Validators.required]],
      comment: ['', [Validators.required,Validators.pattern('^([a-zA-Z0-9]|\s)*$'),Validators.minLength(8),Validators.maxLength(200)]]
    });
  }

  submitForm() {
    console.log("titles",this.contactForm);
    this.contactService.Contact(this.contactForm.value)
    .subscribe(
      data => {
        console.log("res frontend:",data);
        this.toastr.success("Has enviado tus datos correctamente', 'Perfecto!")
        this.isSubmitting = false;
        this.router.navigateByUrl('/');
      },
      err => {
        console.log("err",err);
        this.errors = err;
      }
    );
  }

}

