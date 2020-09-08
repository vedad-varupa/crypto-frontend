import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AritmetikaComponent } from './aritmetika.component';

describe('AritmetikaComponent', () => {
  let component: AritmetikaComponent;
  let fixture: ComponentFixture<AritmetikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritmetikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritmetikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
