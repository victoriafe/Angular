import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadearComponent } from './header/headear.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [AppComponent, HeadearComponent, BodyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
