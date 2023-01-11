import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GlobalInformationComponent } from '../../modules/global-information/global-information.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private router: Router, private modal: MatDialog){}


  navigate(url:string): void {
    this.router.navigate([`${url}`])
  }

  openDetails(): void {
    this.modal.open(GlobalInformationComponent, {width: '400px'})
  }
}
