import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {GraphsService} from "./graphs.service";


import { AppComponent } from './app.component';
import { McsAllMotosDistributionGraphComponent } from './mcs-popular-motos-graph/mcs-popular-motos-graph.component';
import { McsMotoSelectComponent } from './mcs-moto-select/mcs-moto-select.component';


@NgModule({
  declarations: [
    AppComponent,
    McsAllMotosDistributionGraphComponent,
    McsMotoSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GraphsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
