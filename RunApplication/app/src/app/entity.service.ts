import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class EntityService {

  constructor(private http:HttpClient) { }

  getEntities(path) {
    return this.http.get(`/api/${path}`);
  }

  getEntity(path, id) {
    return this.http.get(`/api/${path}/${id}`);
  }

  addEntity(path, entity) {
    const body = JSON.stringify(entity);
    return this.http.post(`/api/${path}/`, body, httpOptions);
  }

  updateEntity(path, entity) {
    const body = JSON.stringify(entity);
    return this.http.put(`/api/${path}/${entity._id}`, body, httpOptions);
  }
}
