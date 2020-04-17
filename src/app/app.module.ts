import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VHomeComponent } from './v-home/v-home.component';
import { VReportComponent } from './v-report/v-report.component';

import { RouterModule, Routes } from '@angular/router'

import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { VSavedComponent } from './v-saved/v-saved.component'

const config: Routes = [
  { "path": "", "component": VHomeComponent },
  { "path": "home", "component": VHomeComponent },
  { "path": "report/:type/:i", "component": VReportComponent },
  { "path": "saved-for-later", "component": VSavedComponent },
  { "path": "**", "component": VHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VHomeComponent,
    VReportComponent,
    VSavedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(config, {useHash:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
