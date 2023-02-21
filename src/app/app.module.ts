import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    SideBarComponent,
    NotFoundPageComponent,
    AnimeDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
