import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../services/product.service'
import {Product} from '../../interfaces/product'

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {

  id:number
  result:Product
  constructor(private route: ActivatedRoute,private productService : ProductService) { }

  ngOnInit() {
  	console.log("paremters are loadin from route --->",this.route.params)
  	this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.productService.getProductDetails(this.id).subscribe(data => {
		      console.log(data);
		      this.result = data;
		 });
    })


  }

}
