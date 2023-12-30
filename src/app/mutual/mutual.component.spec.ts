/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MutualComponent } from './mutual.component';

describe('MutualComponent', () => {
  let component: MutualComponent;
  let fixture: ComponentFixture<MutualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
