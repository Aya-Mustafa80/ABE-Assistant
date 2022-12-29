import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { HomeComponent } from './Components/home/home.component';
import { TellerAndRmListsComponent } from './Components/teller-and-rm-lists/teller-and-rm-lists.component';
import { TellerRMTasksDetailsComponent } from './Components/teller-rm-tasks-details/teller-rm-tasks-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'TellerRMList/:id', component: TellerAndRmListsComponent },
  { path: 'TellerRMExplanation/:id', component: TellerRMTasksDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
