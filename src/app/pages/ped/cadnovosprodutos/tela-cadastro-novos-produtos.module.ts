import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaCadastroNovosProdutosRoutingModule } from './tela-cadastro-novos-produtos-routing.module';
import { TelaCadastroNovosProdutosComponent } from './tela-cadastro-novos-produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    TelaCadastroNovosProdutosComponent
  ],
  imports: [
    CommonModule,
    TelaCadastroNovosProdutosRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class TelaCadastroNovosProdutosModule { }
