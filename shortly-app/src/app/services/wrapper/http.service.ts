import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiBase:string = 'https://api.shrtco.de/v2/';

  constructor(private http:HttpClient) {}

  post(url:string, params:object ={}){
    url = this.apiBase + url;

    return this.http.post(url, params);
  }
  get(url:string, params:object ={}){
    const u = this.parseParams(params);
    console.log(u)
    url = this.apiBase + url + '?' + u;
    return this.http.get(url);
  }
  parseParams(params:any){
    let res = ""
    if (params){
      const keys = Object.keys(params);
      keys.forEach((item:string)=>{
        res = res.concat(item).concat("=").concat(params[item].toString()).concat('&')
      })
    }
    return res;
  }
}
