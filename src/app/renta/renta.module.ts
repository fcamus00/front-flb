import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentaRoutingModule } from './renta-routing.module';
import { RentaComponent } from './renta.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RentaComponent],
  imports: [
    CommonModule,
    RentaRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class RentaModule { }
