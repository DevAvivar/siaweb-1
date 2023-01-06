import { PesquisaAdiantamentoComponent } from './pesquisa-adiantamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:PesquisaAdiantamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisaAdiantamentoRoutingModule { }
