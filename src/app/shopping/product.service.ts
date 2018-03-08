import { Injectable } from '@angular/core';
import { ProducthttpService } from './producthttp.service';
import { Product } from './product.model';
import { Subject } from 'rxjs/Subject';
import { error } from 'util';
import { Router } from '@angular/router';
@Injectable()
export class ProductService {
  products:Product[]=[];
  productslist = new Subject<Product[]>();
 
  
  constructor(private serv:ProducthttpService,private route:Router ) {
    this.serv.getproductshtttp().subscribe(
        (data:Product[]) => { 
          if(data != null){
          this.products = data;
          this.productslist.next(this.products);
          }
        }
        );
   }

  addproducts(product:Product){
    this.products.push(product);
      this.serv.addproducthttp(this.products).subscribe(
        (data) => { 
             
              alert("product added")
        },
      (error) =>{
        console.log(error)
      });
  }

  getproducts(){
      return this.products;
  }

  deleteproduct(item:Product){
    this.products =this.products.filter((data) => data !== item);
    this.serv.addproducthttp(this.products).subscribe(
      (data) => { 
         
            alert("product deleted");
            this.productslist.next(this.products);
      },
    (error) =>{
      console.log(error)
    });
  }

  editproduct(product:Product){
    
    this.route.navigate(['/shopping/addproducts'],{ queryParams: { editmode:'true'}})
   
    
  }

  productedit(){
    return  this.serv.getproductshtttp();
  }


}
