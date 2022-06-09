import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ExperienceComponent } from './experience/experience.component';
import { MenuComponent } from './menu/menu.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstScreenComponent,
    ExperienceComponent,
    MenuComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    WhyWeComponent,
    ServicesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
