import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsMotoSelectComponent } from './mcs-moto-select.component';

describe('McsMotoSelectComponent', () => {
  let component: McsMotoSelectComponent;
  let fixture: ComponentFixture<McsMotoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsMotoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsMotoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
