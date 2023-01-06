import { ReembolsoFinanceiroComponent } from './reembolso-financeiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ReembolsoFinanceiroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReembolsoFinanceiroRoutingModule { }
