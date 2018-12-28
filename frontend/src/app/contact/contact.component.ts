import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ContactService } from '../core';
//import { ToastrManager } from 'ng6-toastr-notifications';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  article: Article = {} as Article;
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    // use the FormBuilder to create a form group
    this.articleForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', [Validators.required]],
      comment: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(200)]]
    });

    // Initialized tagList as empty array
    this.article.tagList = [];

  }

  submitForm() {
    console.log("titles",this.articleForm);
    /*console.log("title",this.articleForm.value.name);*/
    this.contactService.Contact(this.articleForm.value)
    .subscribe(
      data => {
        console.log("res frontend:",data);
        //this.toastr.successToastr('Has enviado tus datos correctamente', 'Perfecto!');
        this.toastr.success("Hello, I'm the toastr message.")
        this.isSubmitting = false;
        this.router.navigateByUrl('/');
      },
      err => {
        console.log("err",err);
        this.errors = err;
      }
    );
  }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.");
  }

}

