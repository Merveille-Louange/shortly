import { Component, OnInit } from '@angular/core';
import {Navigation} from "../../../interfaces/Navigation";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navigationArray: Array<Navigation> = [
    {
      name:"features",
      link:"./features"
    },
    {
      name:"pricing",
      link:"./pricing"
    },
    {
      name:"resources",
      link:"./resources"
    }
  ]
  isShowDivIf = true;

  constructor(private route:ActivatedRoute){

  }


  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  isNavActive(nav:Navigation){
    console.log(this.route.url)
  }

}
