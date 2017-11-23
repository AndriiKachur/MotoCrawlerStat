import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsAllMotosDistributionGraphComponent } from './mcs-all-motos-distribution-graph.component';

describe('McsAllMotosDistributionGraphComponent', () => {
  let component: McsAllMotosDistributionGraphComponent;
  let fixture: ComponentFixture<McsAllMotosDistributionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsAllMotosDistributionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsAllMotosDistributionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
