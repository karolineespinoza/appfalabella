import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentaComponent } from './renta.component';

const routes: Routes = [
  { path: '', component: RentaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentaRoutingModule { }
