import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public datas : any[];
  public list_categories : string[] ;

  constructor(private dataService: DataService) { 
    this.datas = [];
    this.list_categories = [];
  }

  ngOnInit(): void {


    this.dataService.getData().subscribe(
      (data: any[]) => {

      this.datas = data;
      //this.list_categories = _.uniq(this.datas.map(product => product.product_breadcrumb_label));
      this.list_categories = _.uniq(_.pluck(data, "product_breadcrumb_label")) ;
      //console.log(this.datas);

      this.datas.length = 20;
      
    });

  };

  onEventLike(){
      this.dataService.plantLiked$.next('');
      
  }
    

}
