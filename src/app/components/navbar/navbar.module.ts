import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { GlobalInformationModule } from '../../modules/global-information/global-information.module';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    GlobalInformationModule,
    MatDialogModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
