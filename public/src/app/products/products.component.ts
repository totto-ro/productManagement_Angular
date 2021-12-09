import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../main/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts : any;

  constructor(  private _productService: ProductService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    console.log("We are going to fetch the Product list!");
    this._productService.fetchAllProducts()
    .subscribe( (data:any) => {
      this.allProducts = data;
      console.log( "From main component: ", this.allProducts );
    });
  }

  destroyProduct(id : string){
    let observable = this._productService.deleteProduct(id);
    observable.subscribe(
      (data : any) =>{
        console.log(data)
        this.getAllProducts();
      },
      ( error: any ) => {
        console.log( error );
      }
    )
  }

}
