import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {GraphsService} from "./graphs.service";


import { AppComponent } from './app.component';
import { McsAllMotosDistributionGraphComponent } from './mcs-all-motos-distribution-graph/mcs-all-motos-distribution-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    McsAllMotosDistributionGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GraphsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
