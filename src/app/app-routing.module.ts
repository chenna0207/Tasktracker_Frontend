import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './home/profile/profile.component';
import { ProjectDetailsComponent } from './home/project-details/project-details.component';
import { ProjectsListComponent } from './home/projects-list/projects-list.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { UsersComponent } from './home/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // Add AuthGuard for necessary routes
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'project-details', component: ProjectDetailsComponent, canActivate: [AuthGuard] },
  { path: 'projects-list', component: ProjectsListComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
