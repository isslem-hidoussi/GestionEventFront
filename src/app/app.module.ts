import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { AllEventComponent } from './all-event/all-event.component';
import { FormsModule } from '@angular/forms';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AddOrganisateurComponent } from './add-organisateur/add-organisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AdminEventComponent,
    AddEventComponent,
    AllEventComponent,
    UpdateEventComponent,
    AddOrganisateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
