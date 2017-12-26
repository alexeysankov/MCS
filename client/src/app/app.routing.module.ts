import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //   path: 'employees',
    //   component: EmployeesComponent,
    //   canActivate: [AuthGuard]
    // },
    // otherwise redirect to newdashboard
    { path: '**', redirectTo: '/home' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
    HomeComponent,
    LoginComponent
]