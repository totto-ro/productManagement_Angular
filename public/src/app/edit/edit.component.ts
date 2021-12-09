import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../main/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentProduct: any;
  errorMessage: any;
  id : any;

  constructor(  private _productService: ProductService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

getProduct( id:string ): void{
  let observable = this._productService.getOneProduct( id );
  
  observable.subscribe( (data:any) =>{
    this.currentProduct = data;
    console.log("One result By ID: ", this.currentProduct)
  },
  ( error: any ) => {
    console.log( error );
    this.errorMessage = error.statusText;
  });
}

  
  editProduct(event: any ){
    console.log("Changing Product name to: ", this.currentProduct)
    let observable = this._productService.updateProduct(this.id, this.currentProduct);
    console.log("Product to edit: ", this.id)
    observable.subscribe( (data : any) =>{
        console.log("Edit current Product: ", data)
        this._router.navigate( ['/products'] );
      },
      ( error: any ) => {
        console.log( error );
        this.errorMessage = error.statusText;
      })

  }

}
