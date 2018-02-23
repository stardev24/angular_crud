import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from '../../interfaces/product'
@Component({
  selector: 'app-pcatalouge',
  templateUrl: './pcatalouge.component.html',
  styleUrls: ['./pcatalouge.component.css']
})
export class PcatalougeComponent implements OnInit {

  data:Product[]
  constructor(private _productService : ProductService) { }

  ngOnInit() {
  	this._productService.getProducts().subscribe(data => {
	      console.log(data);
	      this.data = data;
	 });

  }

}
