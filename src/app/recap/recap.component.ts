import { Component } from '@angular/core';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css'
})
export class RecapComponent {
  tasks:{id: number,title: string, completed: boolean}[] = []



  get tasksToComplete() {
    return this.tasks.filter(task => !task.completed).length;
  }

  get tasksCompleted() {
    return this.tasks.filter(task => task.completed).length;
  }


  ngOnInit(): void {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? this.tasks = JSON.parse(tasksJson) : [];
  }
}
