import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCostsComponent } from './fixed-costs.component';

describe('FixedCostsComponent', () => {
  let component: FixedCostsComponent;
  let fixture: ComponentFixture<FixedCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
