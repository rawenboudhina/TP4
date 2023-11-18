import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlatGuard} from './plat.guard';


const routes: Routes = [{path: "plats" ,component:PlatsComponent},
{path: "add-plat",component:AddPlatComponent,canActivate:[PlatGuard]},
{path: "updatePlat/:id", component: UpdatePlatComponent},
{path: 'login', component: LoginComponent},
{path: 'forbidden', component : ForbiddenComponent},
{ path: "", redirectTo: "plats", pathMatch: "full" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
