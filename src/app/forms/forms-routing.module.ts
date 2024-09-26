import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsDynamicComponent } from './screen/forms-dynamic/forms-dynamic.component';
import { FormsDynamicListComponent } from './screen/forms-dynamic-list/forms-dynamic-list.component';

const routes: Routes = [
  {path:'dynamic',component:FormsDynamicComponent},
  {path:'reactiv',component:FormsDynamicListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
