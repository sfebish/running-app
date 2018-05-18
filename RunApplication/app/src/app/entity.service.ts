import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class EntityService {

  apiUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getEntities(path) {
    return this.http.get(`${this.apiUrl}/api/${path}`);
  }

  getEntity(path, id) {
    return this.http.get(`${this.apiUrl}/api/${path}/${id}`);
  }

  addEntity(path, entity) {
    const body = JSON.stringify(entity);
    return this.http.post(`${this.apiUrl}/api/${path}/`, body, httpOptions);
  }

  updateEntity(path, entity) {
    const body = JSON.stringify(entity);
    return this.http.put(`${this.apiUrl}/api/${path}/${entity._id}`, body, httpOptions);
  }

  post(path, body) {
    const bodyString = JSON.stringify(body);
    return this.http.post(`${this.apiUrl}/api/${path}`, bodyString, httpOptions);
  }
}
