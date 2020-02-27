import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  accountForm = this.fb.group({
    rut: [null, Validators.required],
    celular: [null, Validators.required],
    email: [null, Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.accountForm.valid) {
      this.router.navigate(['renta'], {state: this.accountForm.value});
    }
  }
}
