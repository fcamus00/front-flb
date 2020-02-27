import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {
  registerData = {};
  rentaForm = this.fb.group({
    renta: [null, Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit() {
    this.getRegisterData();
  }

  getRegisterData(): void {
    this.registerData.rut = history.state.rut;
    this.registerData.celular = history.state.celular;
    this.registerData.email = history.state.email;
  }

  onSubmit() {
    if (this.rentaForm.valid) {
      this.registerData.renta = this.rentaForm.value.renta;
      this.registerService.add(this.registerData)
        .subscribe(reg => alert('Registro guardado ' + reg));
      console.log(this.registerData);
    }
  }
}
