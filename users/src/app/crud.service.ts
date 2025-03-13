import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
base_url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Iuser[]>(this.base_url);
  }

  postdata(data: Iuser){
return this.http.post(this.base_url, data);

  }

  getDataById(id: number){
return this.http.get<Iuser>('${this.base_url}/${id}'); 
  }
}
