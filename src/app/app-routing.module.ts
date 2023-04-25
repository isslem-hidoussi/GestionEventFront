import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {OrganisateurPageComponent} from "./organisateur-page/organisateur-page.component";
import {UpdateEventComponent} from "./update-event/update-event.component";
import {AllEventComponent} from "./all-event/all-event.component";
import {MyEventsComponent} from "./my-events/my-events.component";
import {AddEventComponent} from "./add-event/add-event.component";
import {ListParticipantsComponent} from "./list-participants/list-participants.component";
import {UpdateParticipantComponent} from "./update-participant/update-participant.component";
import {AddParticipantComponent} from "./add-participant/add-participant.component";
import {ListOrganisateursComponent} from "./list-organisateurs/list-organisateurs.component";
import {AddOrganisateurComponent} from "./add-organisateur/add-organisateur.component";
import {UpdateOrganisateurComponent} from "./update-organisateur/update-organisateur.component";

const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: '', component: AllEventComponent},
  {path: 'etudiants', component: ListParticipantsComponent},
  {path: 'admin/add-participant', component: AddParticipantComponent},
  {path: 'admin/edit-participant/:id-participant', component: UpdateParticipantComponent},
  {path: 'organisateurs', component: ListOrganisateursComponent},
  {path: 'admin/add-organisateur', component: AddOrganisateurComponent},
  {path: 'admin/edit-organisateur/:id-organisateur', component: UpdateOrganisateurComponent},
  {path: "events", component: MyEventsComponent},
  {path: 'admin', component: AllEventComponent},
  {path: 'organisateurs', component: OrganisateurPageComponent},
  {path: 'admin/add-event', component: AddEventComponent},
  {path: 'admin/edit-event/:id-event', component: UpdateEventComponent},
  {path: 'mes-evenements', component: MyEventsComponent},
  {path: 'etudiants', component: MyEventsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
