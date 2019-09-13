import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorGrantsComponent } from './generador-grants.component';

describe('GeneradorGrantsComponent', () => {
  let component: GeneradorGrantsComponent;
  let fixture: ComponentFixture<GeneradorGrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorGrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
