import { PrioridadedeEmprestimoComponent } from './prioridadede-emprestimo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:PrioridadedeEmprestimoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrioridadedeEmprestimoRoutingModule { }
