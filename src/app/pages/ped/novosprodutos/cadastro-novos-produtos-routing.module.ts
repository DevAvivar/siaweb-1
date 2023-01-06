import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroNovosProdutosComponent } from './cadastro-novos-produtos.component';

const routes: Routes = [
  {path: '', component:CadastroNovosProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CadastroNovosProdutosRoutingModule { }
