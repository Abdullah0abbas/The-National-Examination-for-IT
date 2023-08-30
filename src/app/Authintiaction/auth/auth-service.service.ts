import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  getAllColleges():Observable<any[]>{
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/college/all');
  }
  
  register(modal:any){
    return this.http.post('https://backendsp01.000webhostapp.com/api/register',modal)
  }

  login(modal:any){
    return this.http.post('https://backendsp01.000webhostapp.com/api/login',modal)
  }
}
