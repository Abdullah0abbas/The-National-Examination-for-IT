import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getAllColleges(): Observable<any[]> {
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/college/all');
  }

  geAllSpecialization(): Observable<any[]> {
   return this.http.get<any>('https://backendsp01.000webhostapp.com/api/specialization/all')
  }

  getAllDwrat() {
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/term/all')
  }

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/question/all');
  }

  getAllAnswers(): Observable<any[]> {
    return this.http.get<any>('https://backendsp01.000webhostapp.com/api/answer/all')
  }

}
