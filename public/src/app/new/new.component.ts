import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../main/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  errorMessage: any;
  
  constructor(  private _productServiceService: ProductService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.newProduct = {
      title : "",
      price : 0,
      image : ""
    }
  }


  createProduct(event: any ): void{
    console.log(this.newProduct)
    let observable = this._productServiceService.createProduct( this.newProduct);
    observable.subscribe( (data : any) =>{
        console.log("New product: ", data)
        this._router.navigate( ['/products'] );
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      })

  }

}
