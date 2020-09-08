import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteuklidComponent } from './exteuklid.component';

describe('ExteuklidComponent', () => {
  let component: ExteuklidComponent;
  let fixture: ComponentFixture<ExteuklidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteuklidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteuklidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
