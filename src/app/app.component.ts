import { Component, Input } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTask: Task = {
    title: '',
    completed: false
  };



  constructor(private taskService: TaskService) {  }

  addTask() {
    this.taskService.add(this.myTask)
      .subscribe(task => this.myTask = task);
  }

}
