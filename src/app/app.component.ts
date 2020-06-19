import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  tasks = [
    { 
    label: 'task one',
    completed: false,
    priority:3
  },
  { 
    label: 'task two',
    completed: true,
    priority:1
  },
  { 
    label: 'task three',
    completed: false,
    priority:2
  },
  { 
    label: 'task four',
    completed: true,
    priority:4
  },
  { 
    label: 'task five',
    completed: false,
    priority:3
  },
];

addTask(newTaskLabel) {
  var newTask = {
    label: newTaskLabel,
    priority: 1,
    completed: false
    };
    this.tasks.push(newTask);
  }

  deleteTask(todo){
    this.tasks = this.tasks.filter(t=>t.label !== todo.label);
  }
}
