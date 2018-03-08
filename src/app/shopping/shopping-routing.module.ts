import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  { path: '', redirectTo: 'addproducts', pathMatch: 'full'
 
  },
  { path: 'addproducts', component: AddproductsComponent,
  // canActivate:[Roleguard], 
      // data: { 
      //   expectedRole: 'admin'
      // }
  },
  { path: 'viewproducts', component: ViewproductsComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
