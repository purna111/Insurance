import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { PremiumCheckComponent } from './premium-check/premium-check.component';

const routes: Routes = [
  {path:'property',component:PropertyComponent},
  { path: 'premium-check', component: PremiumCheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
