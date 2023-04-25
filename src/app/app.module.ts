import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AdminEventComponent} from './admin-event/admin-event.component';
import {AddEventComponent} from './add-event/add-event.component';
import {HttpClientModule} from '@angular/common/http';
import {AllEventComponent} from './all-event/all-event.component';
import {FormsModule} from '@angular/forms';
import {UpdateEventComponent} from './update-event/update-event.component';
import {AddOrganisateurComponent} from './add-organisateur/add-organisateur.component';
import {AddParticipantComponent} from './add-participant/add-participant.component';
import {UpdateParticipantComponent} from './update-participant/update-participant.component';
import {UpdateOrganisateurComponent} from './update-organisateur/update-organisateur.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {OrganisateurPageComponent} from './organisateur-page/organisateur-page.component';
import {MyEventsComponent} from './my-events/my-events.component';
import { ListParticipantsComponent } from './list-participants/list-participants.component';
import { ListOrganisateursComponent } from './list-organisateurs/list-organisateurs.component';
import { FooterComponent } from './footer/footer.component';

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
    AddOrganisateurComponent,
    AddParticipantComponent,
    UpdateParticipantComponent,
    UpdateOrganisateurComponent,
    AdminPageComponent,
    UserPageComponent,
    OrganisateurPageComponent,
    MyEventsComponent,
    ListParticipantsComponent,
    ListOrganisateursComponent,
    FooterComponent
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
export class AppModule {
}
