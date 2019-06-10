import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { NgxAdibroConsoleModule, NgxAdibroConsoleService } from 'ngx-adibro-console';
import { CommandHandlerService } from './services/command-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAdibroConsoleModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    NgxAdibroConsoleService,
    CommandHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
