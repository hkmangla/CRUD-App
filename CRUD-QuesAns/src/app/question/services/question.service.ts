import { Injectable } from '@angular/core';
import { Question } from '../question';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  serverApi = 'http://localhost:3000';

  getQuestions(categoryTitle): Observable<Question[]> {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions`;
    return this.http.get(URI).pipe(
        map(res => <Question[]>res['data']['questions'])
    );
  }

  incLikes(categoryTitle, questionId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/likes`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put(URI, {headers: headers});
  }

  incDislikes(categoryTitle, questionId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/dislikes`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put(URI, {headers: headers});
  }

  deleteQuestion(categoryTitle, questionId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(URI, {headers: headers});
  }

  addQuestion(categoryTitle, question) {

    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions`;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(URI, question, {headers: headers});
  }

}
