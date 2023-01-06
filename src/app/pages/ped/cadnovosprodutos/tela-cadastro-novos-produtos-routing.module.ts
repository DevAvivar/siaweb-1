import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroNovosProdutosComponent } from './tela-cadastro-novos-produtos.component';

const routes: Routes = [
  {path: '', component:TelaCadastroNovosProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TelaCadastroNovosProdutosRoutingModule { }
