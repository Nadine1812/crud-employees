import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './components/display/display.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'displayEmployee/:id' , component : DisplayComponent},
  {path : 'editEmployee/:id' , component : FormComponent},
  {path : 'addEmployee' , component : FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
