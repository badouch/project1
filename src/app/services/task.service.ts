import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  urltasks = 'http://localhost:3000';
  getAll() {
    return this.httpClient.get<Task[]>(this.urltasks + '/tasks');
  }

  add(task: Task) {
    return this.httpClient.post<Task>(this.urltasks + '/tasks', task);
  }
}
