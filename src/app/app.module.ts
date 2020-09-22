import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppViewComponent } from './views/app/app-view.component';
import { CalculationViewComponent } from './views/calculation-page/calculation-view.component';
import { OtherPageViewComponent } from './views/other-page/other-page-view.component';
import { DataService } from './services/data.service';
import { AppSandbox } from './app.sandbox';

@NgModule({
  declarations: [
    AppViewComponent,
    CalculationViewComponent,
    OtherPageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppSandbox,
    DataService
  ],
  bootstrap: [AppViewComponent]
})
export class AppModule { }
