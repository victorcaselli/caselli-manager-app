import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedCostsComponent } from './fixed-costs.component';
import { FixedCostsRoutingModule } from './fixed-costs-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { GlobalInformationModule } from '../global-information/global-information.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FixedCostsComponent
  ],
  imports: [
    CommonModule,
    FixedCostsRoutingModule,
    SharedModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class FixedCostsModule { }
