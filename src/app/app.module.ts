import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTreeModule } from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TellerAndRmListsComponent } from './Components/teller-and-rm-lists/teller-and-rm-lists.component';
import { TellerRMTasksDetailsComponent } from './Components/teller-rm-tasks-details/teller-rm-tasks-details.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TellerAndRmListsComponent,
    TellerRMTasksDetailsComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatTreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
