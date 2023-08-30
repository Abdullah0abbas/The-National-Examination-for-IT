
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
 get: any;

 constructor(private http:HttpClient){}

 profile(modal:any){
  return this.http.post("https://backendsp01.000webhostapp.com/api/profile/update",modal)
 }

 updatePhoto (modal:any){
  return this.http.post("https://backendsp01.000webhostapp.com/api/profile/update-photo",modal)
 }

 slider():Observable<any[]>{
  return this.http.get<any>('https://backendsp01.000webhostapp.com/api/slider/all')
}

}
