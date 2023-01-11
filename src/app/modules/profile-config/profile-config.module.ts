import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileConfigComponent } from './profile-config.component';
import { ProfileConfigRoutingModule } from './profile-config.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileConfigComponent
  ],
  imports: [
    CommonModule,
    ProfileConfigRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule
  ]
})
export class ProfileConfigModule { }
