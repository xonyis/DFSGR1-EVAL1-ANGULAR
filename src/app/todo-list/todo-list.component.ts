import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tasks:{id: number,title: string, completed: boolean}[] = []
  newTaskTitle = ''


  ngOnInit(): void {
    const savedTask = localStorage.getItem("tasks");

    if (savedTask==null) {

    } else {
      this.tasks = JSON.parse(savedTask);
    }
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  addTask(){
    const newTask = {
      id: Date.now(),
      title: this.newTaskTitle,
      completed: false,
    };

    this.tasks.push(newTask)
    this.newTaskTitle = '';
    this.save()
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.save();
  }
}
