import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authntication/auth.guard';
import { AuthnticationComponent } from './authntication/authntication.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "authentication", component: AuthnticationComponent},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
