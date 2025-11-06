import { Routes } from '@angular/router';
import { FormComponent } from './form-component/form-component';
import { ParentComponent } from './parent-component/parent-component';
import { Dashboard } from './dashboard/dashboard';


export const routes: Routes = [
     { path: '', component:  Dashboard},
  { path: 'form', component: FormComponent },
  { path: 'parent', component: ParentComponent },
 
];
