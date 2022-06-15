import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public formData!: FormGroup;

  constructor() { }
  
  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(12), Validators.maxLength(12)]),
      mail: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }

    submited(f: { resetForm: () => void; }) {
      if (this.formData.valid) {
        console.log(this.formData.value);
        alert('Thanks, your message sended!') 
        f.resetForm();
      }
    }

}
