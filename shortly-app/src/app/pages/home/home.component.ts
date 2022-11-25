import { Component, OnInit } from '@angular/core';
import {card} from "../../interfaces/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards:Array<card> = [
    {title:"Brand Recognition",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl:""},
    {title:"Detailed Records",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl:""},
    {title:"Fully customizable",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl:""}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
