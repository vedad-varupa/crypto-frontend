import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeorijaComponent } from './teorija.component';

describe('TeorijaComponent', () => {
  let component: TeorijaComponent;
  let fixture: ComponentFixture<TeorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
