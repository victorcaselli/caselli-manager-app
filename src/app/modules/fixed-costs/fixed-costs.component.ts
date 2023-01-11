import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FixedCostsService } from './service/fixed-costs.service';
import { FixedCostsResponse, ExpenseResponse } from './fixed-costs.types';

@Component({
  selector: 'app-fixed-costs',
  templateUrl: './fixed-costs.component.html',
  styleUrls: ['./fixed-costs.component.scss']
})
export class FixedCostsComponent implements OnInit {
  servicesTotalCost: number = 0;
  displayedColumns: string[] = ['id', 'description', 'cost'];
  dataSource: ExpenseResponse[]
  totalCost: string;
  serviceTotalCost:string

  servicesDisplayedColumns: string[] = ['id', 'description', 'cost'];
  servicesDataSource: ExpenseResponse[];

  constructor(
    private fcService: FixedCostsService
  ){}

  ngOnInit(): void {
    this.findAll();
  }


  findAll(): void {
    this.fcService.findAll().subscribe();

    this.fcService.fixedCostsAll$.subscribe(response => {
      if(!response){
        return;
      }

      this.dataSource = response.expenses
      this.totalCost = response.totalCost

      this.servicesDataSource = response.services;
      this.serviceTotalCost = response.servicesTotalCost;
    })
  }

}
