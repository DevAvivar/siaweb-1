import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservadeSalaComponent } from './reservade-sala.component';

const routes: Routes = [
  {path:'',component:ReservadeSalaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservadeSalaRoutingModule { }
