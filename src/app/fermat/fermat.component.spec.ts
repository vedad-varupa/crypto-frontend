import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermatComponent } from './fermat.component';

describe('FermatComponent', () => {
  let component: FermatComponent;
  let fixture: ComponentFixture<FermatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
