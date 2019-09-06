import { Component, Input, OnInit } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myTask: Task = {
    title: '',
    completed: false
  };

  tasksNbr: number;

  constructor(private taskService: TaskService) {  }
  ngOnInit(): void {
    this.taskService.getAll().subscribe(tasks => {
      this.myTask.id = this.tasksNbr + 1;
    });
  }
  addTask() {
    this.taskService.add(this.myTask)
      .subscribe(task => console.log('after ' + task.id));
  }

}
