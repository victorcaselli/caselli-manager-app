import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FixedCostsResponse } from '../fixed-costs.types';

@Injectable({
  providedIn: 'root'
})
export class FixedCostsService {

  private fixedCostsAll: BehaviorSubject<FixedCostsResponse | null> = new BehaviorSubject<FixedCostsResponse | null>(null);

  constructor(
    private http: HttpClient
  ) { }


  get fixedCostsAll$(): Observable<FixedCostsResponse | null> {
    return this.fixedCostsAll.asObservable();
  }


  findAll(): Observable<FixedCostsResponse> {
    return this.http.get<FixedCostsResponse>(`http://localhost:8080/costs/1`)
      .pipe(
        tap((response: FixedCostsResponse) => {
          this.fixedCostsAll.next(response);

          return response;
        })
      )
  }
}
