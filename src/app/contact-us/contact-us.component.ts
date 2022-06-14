import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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
        Validators.minLength(10), Validators.maxLength(10)]),
      mail: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }

    submited(f: { resetForm: () => void; }) {
      console.log(this.formData.value);
      alert('your message sended!')

      f.resetForm();
    }

}
