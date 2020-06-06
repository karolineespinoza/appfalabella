import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {MatButtonModule} from '@angular/material/button';



const routes: Routes = [
  {
    path: `landing`, loadChildren: () =>
      import('./@pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: `renta`, loadChildren: () =>
      import('./@pages/renta/renta.module').then(m => m.RentaModule)
  },
  { path: ``, redirectTo: `landing`, pathMatch: `full` }
];

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  exports: [RouterModule]
})



export class AppRoutingModule {}
