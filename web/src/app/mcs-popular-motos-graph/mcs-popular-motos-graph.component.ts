import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

import {GraphsService} from "../graphs.service";

@Component({
  selector: 'mcs-popular-motos-graph',
  templateUrl: './mcs-popular-motos-graph.component.html',
  styleUrls: ['./mcs-popular-motos-graph.component.scss']
})
export class McsAllMotosDistributionGraphComponent implements OnInit, AfterViewInit {

  constructor(private graphsService: GraphsService, private hostElement: ElementRef) { }

  values;
  dataObservable;
  chart;

  ngOnInit() {
    this.dataObservable = this.graphsService.getAllMotosDistribution();
  }

  ngAfterViewInit() {
    this.dataObservable.subscribe(vals => {
      this.values = vals;
      this.initGraph();
    });
  }

  private initGraph() {
    const ctx = (<HTMLCanvasElement> this.hostElement.nativeElement.querySelector('#mineCanvas')).getContext('2d'),
      data = this.values;

    data.sort((e1, e2) => e1._id.localeCompare(e2._id));

    this.chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: data.map(e => e._id),
        datasets: [{
          label: `Popular motos # by manufacturer`,
          data: data.map(e => e.count),
          backgroundColor: `rgba(255, 159, 64, 0.7)`
        }]
      }
    });
  }


}
