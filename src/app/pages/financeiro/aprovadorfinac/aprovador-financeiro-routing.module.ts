import { AprovadorFinanceiroComponent } from './aprovador-financeiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AprovadorFinanceiroComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprovadorFinanceiroRoutingModule { }
