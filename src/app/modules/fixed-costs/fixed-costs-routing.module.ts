import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FixedCostsComponent } from './fixed-costs.component';

const routes: Routes = [
  {path:"", component: FixedCostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedCostsRoutingModule {}
