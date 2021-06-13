import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"products", component:ProductsComponent},
    {path:"store", component:StoreComponent},
    {path:"community", component:CommunityComponent},
    {path:"support", component:SupportComponent},
    {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
