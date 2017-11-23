import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

import {GraphsService} from "../graphs.service";

@Component({
  selector: 'app-mcs-all-motos-distribution-graph',
  templateUrl: './mcs-all-motos-distribution-graph.component.html',
  styleUrls: ['./mcs-all-motos-distribution-graph.component.scss']
})
export class McsAllMotosDistributionGraphComponent implements OnInit, AfterViewInit {

  constructor(private graphsService: GraphsService) { }

  values;
  dataObservable;

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
    const ctx = document.querySelector('#mineCanvas').getContext('2d'),
      data = this.values;

    data.sort((e1, e2) => e1._id.localeCompare(e2._id));

    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: data.map(e => e._id),
        datasets: [{
          label: `# by manufacturer`,
          data: data.map(e => e.count),
          backgroundColor: `rgba(255, 159, 64, 0.7)`
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }


}
