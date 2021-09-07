import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private hc:HttpClient) { }

  getAllMobiles():Observable<any> {
      return this.hc.get("/mobiles/getAllMobiles");
  }
}
