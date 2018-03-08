import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  additemform:FormGroup;
  editmode:boolean;
  constructor(private serv:ProductService,private route: ActivatedRoute) {

    
   }

  ngOnInit() {
    this.oninitform();
    this.route.queryParams.subscribe((params: Params) => {
          let editmode = params['editmode'];
        
          if(editmode == 'true'){
              this.editmode = true;
                
            }
            else{
              this.editmode = false;
        
            }
        });
  
  }



  oninitform(){
    this.additemform = new FormGroup({
      'productname': new FormControl('',Validators.required),
       'productcost' : new FormControl('',Validators.required),
       'productimage' : new FormControl('',Validators.required),
       'detail' : new FormControl('',Validators.required),
       'productcolor': new FormControl('',Validators.required),
    });
    
  }

  onsubmit(){
    this.serv.addproducts(this.additemform.value);
      this.additemform.reset();
  }

  Updateproduct(){
    alert("updated");
   
  }


 
  



}
