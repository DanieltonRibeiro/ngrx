import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ZooModule } from './zoo/zoo.module';
import { CommonModule } from '@angular/common';
import { ZooComponent } from './zoo/zoo.component';
import { AnimalsState } from './states/animals.states';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxsModule.forRoot([AnimalsState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ZooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
