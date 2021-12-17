import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  likeCounter : number ;

  constructor(private plantouneService : DataService) { 
    this.likeCounter = 0 ; 
  }

  ngOnInit(): void {
    this.plantouneService.plantLiked$.subscribe(
      ()=> {
        console.log('Get new Event from Subject');
        this.likeCounter ++;
      }
    )
  }

}
