/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsstocksComponent } from './usstocks.component';

describe('UsstocksComponent', () => {
  let component: UsstocksComponent;
  let fixture: ComponentFixture<UsstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
