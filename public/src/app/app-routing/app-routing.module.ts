import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewComponent } from '../new/new.component';
import { EditComponent } from '../edit/edit.component';
import { ProductsComponent } from '../products/products.component';


let routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/new',
    component: NewComponent
  },
  {
    path: 'products/edit/:id',
    component: EditComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/'
  },
  {
    path: '**',
    redirectTo: '/'
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
