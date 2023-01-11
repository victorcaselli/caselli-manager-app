import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalInformationComponent } from './global-information.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GlobalInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GlobalInformationModule { }
