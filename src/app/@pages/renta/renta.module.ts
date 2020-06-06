import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RentaRoutingModule } from './renta-routing.module';
import { RentaComponent } from './renta.component';


@NgModule({
  declarations: [RentaComponent],
  imports: [
    CommonModule,
    RentaRoutingModule,
    FormsModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class RentaModule { }
