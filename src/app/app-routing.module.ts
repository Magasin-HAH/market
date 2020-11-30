import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent} from './landing-page/landing-page.component';
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [
 
  { path : "",component:LandingPageComponent},
  {path :"shop",component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
