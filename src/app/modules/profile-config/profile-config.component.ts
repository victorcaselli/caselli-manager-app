import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.scss']
})
export class ProfileConfigComponent implements OnInit {

  configurations:FormGroup


  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.configurations = this.formBuilder.group({
      wage: '',
      foodVoucher: ''
    })
  }
}
