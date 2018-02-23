import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product'
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {ProductService} from '../../services/product.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pcreate',
  templateUrl: './pcreate.component.html',
  styleUrls: ['./pcreate.component.css']
})
export class PcreateComponent implements OnInit {

  private product:Product
  productForm: FormGroup;
  id:number
  constructor(private _productService : ProductService,private activatedRoute: ActivatedRoute) {
  		let id = +this.activatedRoute.snapshot.paramMap.get('id')
  		console.log("id for update -->",id)
  		this.id = id

   }

  ngOnInit() {

  	if(this.id != 0){
  		this._productService.getProductDetails(this.id).subscribe(data => {
	      console.log("response is ----==",data.id);
	      	this.product = data
	    }) 
     
	 });


  	}else{

	    this.productForm = new FormGroup ({
	        id: new FormControl(),
	        title: new FormControl(),
	        company: new FormControl(),
	        status: new FormControl(),
	        revenue: new FormControl(),
		    ceo: new FormGroup({
		        img: new FormControl(),
		        name: new FormControl()
		    })

	    })  	
  	}

  }

  onSubmit(product){

            this.product = this.productForm.value;
            console.log("-----",this.product);
            this.sendData(this.product)
  }
  sendData(data:Product){
  	this._productService.createPorduct(data).subscribe(data => {
	      console.log("response is ",data);
	 });

  }

}
