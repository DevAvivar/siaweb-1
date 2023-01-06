import { RotinaEmprestimodeVeiculoComponent } from './rotina-emprestimode-veiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:RotinaEmprestimodeVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotinaEmprestimodeVeiculoRoutingModule { }
