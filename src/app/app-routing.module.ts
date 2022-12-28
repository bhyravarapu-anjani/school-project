import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeactiveGuard } from './deactive.guard';
import { LoginComponent } from './login/login.component';
import { StudentsDataComponent } from './students-data/students-data.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:"create-student",component:CreateStudentComponent ,canDeactivate:[DeactiveGuard]},
    {path:"students-data",component:StudentsDataComponent}
    
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
