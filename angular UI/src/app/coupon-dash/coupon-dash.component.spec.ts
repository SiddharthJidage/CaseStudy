/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CouponDashComponent } from './coupon-dash.component';

describe('CouponDashComponent', () => {
  let component: CouponDashComponent;
  let fixture: ComponentFixture<CouponDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
