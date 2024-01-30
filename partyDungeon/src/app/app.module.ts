import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { MenuCharsComponent } from './component/menu-chars/menu-chars.component';
import { ButtonPlayComponent } from './component/button-play/button-play.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StartComponent } from './pages/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    MenuCharsComponent,
    ButtonPlayComponent,
    HomeComponent,
    AboutComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
