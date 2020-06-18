import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './Guards/login.guard';


const routes: Routes = [{
  path: "",
  component: LandingPageComponent
}, { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "register", component: RegisterComponent }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
