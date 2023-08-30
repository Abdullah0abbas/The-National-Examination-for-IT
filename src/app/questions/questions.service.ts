import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getAllColleges():Observable<any[]>{
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/college/all');
  }

  geAllSpecialization():Observable<any[]>{
    let headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')?.trim()}`)
    console.log(localStorage.getItem('token'))
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/specialization/all',{headers})
  }

  getAllDwrat(){
    let headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')?.trim()}`)
    console.log(localStorage.getItem('token'))
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/term/all',{headers})
  }

  getAllQuestions(): Observable<any[]>{
    let headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/question/all',{headers});
  }
  
}
