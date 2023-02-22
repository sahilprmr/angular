import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactFormComponent } from './Forms/react-form/react-form.component';
import { TdFormComponent } from './Forms/td-form/td-form.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent,pathMatch:'full' },
  { path: 'TdForm', component: TdFormComponent },
  { path: 'ReactForm', component: ReactFormComponent },
  { path: 'id', component: TdFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  }

