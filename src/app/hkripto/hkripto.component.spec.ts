import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkriptoComponent } from './hkripto.component';

describe('HkriptoComponent', () => {
  let component: HkriptoComponent;
  let fixture: ComponentFixture<HkriptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkriptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
