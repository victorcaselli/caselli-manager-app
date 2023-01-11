import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)},
  {path: "profile-config", loadChildren: () => import("./modules/profile-config/profile-config.module").then(m => m.ProfileConfigModule)},
  {path: "fixed-costs", loadChildren: () => import("./modules/fixed-costs/fixed-costs.module").then(m => m.FixedCostsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
