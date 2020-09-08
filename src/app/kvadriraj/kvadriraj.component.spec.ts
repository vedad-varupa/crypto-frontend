import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvadrirajComponent } from './kvadriraj.component';

describe('KvadrirajComponent', () => {
  let component: KvadrirajComponent;
  let fixture: ComponentFixture<KvadrirajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvadrirajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvadrirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
