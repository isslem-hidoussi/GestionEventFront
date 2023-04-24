import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {OrganisateurPageComponent} from "./organisateur-page/organisateur-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {UpdateEventComponent} from "./update-event/update-event.component";

const routes: Routes = [{path: 'Login', component: LoginComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'admin/edit-event/:id-event', component: UpdateEventComponent},
  {path: 'participant', component: UserPageComponent},
  {path: 'organisateur', component: OrganisateurPageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
