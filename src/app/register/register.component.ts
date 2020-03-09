import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  registerForm = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(2),
    ]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(2),
    ]],
    email: ['',[
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]],
    dateOfBirth: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit () {
    this.registerForm.valueChanges.subscribe(console.log)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}