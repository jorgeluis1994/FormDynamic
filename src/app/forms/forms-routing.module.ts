import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsDynamicComponent } from './screen/forms-dynamic/forms-dynamic.component';

const routes: Routes = [
  {path:'dynamic',component:FormsDynamicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
