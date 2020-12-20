import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LimiterComponent } from './components/limiter/limiter.component';
import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthserviceService } from './services/authservice.service';
import { LogoutcomponentComponent } from './components/logoutcomponent/logoutcomponent.component';


const routes: Routes = [
  {path: 'login', component:LimiterComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomepageComponent,canActivate:[AuthserviceService]},
  {path: 'logout', component:LogoutcomponentComponent,canActivate:[AuthserviceService]},
  {path:'', component:LimiterComponent},
  {path:'**', component:LimiterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LimiterComponent,
    RegisterComponent,
    HomepageComponent,
    LogoutcomponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserService]
})
export class AppModule { }
