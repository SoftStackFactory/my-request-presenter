import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*'), Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      DOB: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9]*')]],
    });
  }

  onSubmit(){
    console.log(this.myForm.value)
    // this._router.navigate(['/home'])

  }



}
