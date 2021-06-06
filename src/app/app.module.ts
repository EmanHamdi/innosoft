import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './view/menu/menu.component';
import { InnosoftTestPlatformComponent } from './view/innosoft-test-platform/innosoft-test-platform.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { FooterComponent } from './view/footer/footer.component';
import { InitiativesComponent } from './view/initiatives/initiatives.component';
import { ChancesComponent } from './view/chances/chances.component';
import { AchievementsComponent } from './view/achievements/achievements.component';
import { PartnershipsComponent } from './view/partnerships/partnerships.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './atom/title/title.component';
import { AdvantagesComponent } from './view/advantages/advantages.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InnosoftTestPlatformComponent,
    ContactUsComponent,
    FooterComponent,
    InitiativesComponent,
    ChancesComponent,
    AchievementsComponent,
    PartnershipsComponent,
    HomeComponent,
    TitleComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
