import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './elements/hero/hero.component';
import { CryptoListComponent } from './elements/crypto-list/crypto-list.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { FooterComponent } from './elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CryptoListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
