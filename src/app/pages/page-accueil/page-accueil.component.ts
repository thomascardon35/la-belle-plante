import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from 'src/app/data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public listData = list_products;
  public list_categories !: string [] ;

  constructor() { 
    
  }

  ngOnInit(): void {
    
    this.list_categories = _.uniq(_.pluck(this.listData, "product_breadcrumb_label")) ;
    //this.list_categories = _.uniq(this.listData.map(product => product.product_breadcrumb_label));
    
  };
    

}
