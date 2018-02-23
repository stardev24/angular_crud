import { Injectable } from '@angular/core';

import {Product} from '../interfaces/product'

import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  baseurl:string = "http://localhost:2111/products"

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{


	return this.http.get<Product[]>(this.baseurl);

  }

  getProductDetails(id:number):Observable<Product>{


	     return this.http.get<Product>(this.baseurl+"/"+id);

  }

  createPorduct(data){
      console.log("data for post -->",data)
      return this.http.post<Product>(this.baseurl,data)
  }

}
