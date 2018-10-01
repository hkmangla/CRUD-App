import { Injectable } from '@angular/core';
import {Answer} from '../answer';
import {Observable} from "rxjs/index";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }
  serverApi = 'http://localhost:3000';

  getAnswers(categoryTitle, questionId): Observable<Answer[]> {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers`;

    return this.http.get(URI).pipe(
      map(res => <Answer[]>res['data'])
    );
  }

  getQuestionText(categoryTitle, questionId): Observable<string> {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/description`;

    return this.http.get(URI).pipe(
      map(res => <string>res['data'])
    );
  }

  addAnswer(categoryTitle, questionId, answer) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers`;

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, answer, {headers: headers});
  }

  editAnswer (categoryTitle, questionId, answerId, answertext) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers/${answerId}/text`;

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const retObj = {
      text: answertext
    };

    return this.http.put(URI, retObj, {headers: headers});
  }

  incLikes(categoryTitle, questionId, answerId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers/${answerId}/likes`;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put(URI, {headers: headers});
  }

  incDislikes(categoryTitle, questionId, answerId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers/${answerId}/dislikes`;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put(URI, {headers: headers});
  }

  deleteAnswer (categoryTitle, questionId, answerId) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}/questions/${questionId}/answers/${answerId}`;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(URI, {headers: headers});
  }


}
