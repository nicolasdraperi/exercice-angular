import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataExportService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get("https://dummyjson.com/users/1");
  }
}
