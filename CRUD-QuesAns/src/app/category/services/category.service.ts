import { Injectable } from '@angular/core';
import {Category} from '../category';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }

  private serverApi = 'http://localhost:3000';

  getCategoryTitles(): Observable<String[]> {
    const URI = `${this.serverApi}/cruddata/categories/titles`;

    return this.http.get(URI).pipe(
      map(res => res['data'].map(val => val['title']))
    );
  }

  getCategories(): Observable<any> {
    const URI = `${this.serverApi}/cruddata/categories`;
    return this.http.get(URI).pipe(
      map(res => res['data'])
    );
  }


  updateCategory(category) {
    const URI = `${this.serverApi}/cruddata`;

    if (category !== undefined && category !== null) {
      let headers = new HttpHeaders();

      headers.append('Content-Type', 'application/json');

      return this.http.post(URI, category, {headers: headers});
    }
  }

  deleteCategory(categoryTitle) {
    const URI = `${this.serverApi}/cruddata/categories/${categoryTitle}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(URI, {headers: headers});
  }
}
