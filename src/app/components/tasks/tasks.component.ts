import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] ;
  @Input() data ;

  constructor(private taskService: TaskService) {  }

  ngOnInit() {
    this.taskService.getAll().subscribe(tasks => this.tasks = tasks);
  }

}
