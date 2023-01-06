import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargadeMateriaPrimaComponent } from './descargade-materia-prima.component';

const routes: Routes = [
  {path: '', component:DescargadeMateriaPrimaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescargadeMateriaPrimaRoutingModule { }
