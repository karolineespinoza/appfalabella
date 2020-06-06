import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatIconModule
  ]
})
export class LandingModule { }
