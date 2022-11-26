import { Injectable } from '@angular/core';
import {HttpService} from "./wrapper/http.service";
import {link} from "../interfaces/link";

@Injectable({
  providedIn: 'root'
})
export class ShortenService {
  links:Array<link> = []
  constructor(private httpService: HttpService) { }

  getShortened(link:string){

    this.httpService.post(link, {}).subscribe((res:any) => {
      this.links = res.data;
    });
  }
  shorten(url:string){
    this.httpService.get("shorten", {url}).subscribe((res:any)=>{
      if(res && res.ok == true){
        this.links.push(res.result);
        localStorage.setItem("shortenedList", JSON.stringify(this.links));
      }
    })

  }

  getLinks() {
    let data = localStorage.getItem("shortenedList");
    this.links =  data ? JSON.parse(data) : [];
  }

}
