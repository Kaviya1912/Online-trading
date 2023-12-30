/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndstocksComponent } from './indstocks.component';

describe('IndstocksComponent', () => {
  let component: IndstocksComponent;
  let fixture: ComponentFixture<IndstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
