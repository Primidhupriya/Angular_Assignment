import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './modules/form/form.component';
import { WebsiteComponent } from './modules/website/website.component';


const routes: Routes = [
  { path:'', component: MainComponent},
  { path:'form', component: FormComponent},
  { path:'website', component: WebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
