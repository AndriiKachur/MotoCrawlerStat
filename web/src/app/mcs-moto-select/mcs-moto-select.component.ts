import {Component, Input, OnInit} from '@angular/core';

import {GraphsService} from "../graphs.service";

@Component({
  selector: 'mcs-moto-select',
  templateUrl: './mcs-moto-select.component.html',
  styleUrls: ['./mcs-moto-select.component.scss']
})
export class McsMotoSelectComponent implements OnInit {

  manufacturers;
  @Input() manufacture;

  constructor(private grapsService: GraphsService) { }

  ngOnInit() {
    this.grapsService.getAllMotoManufacturers().subscribe((e: any[]) => this.manufacturers = e.map(m => m._id));
  }

}
