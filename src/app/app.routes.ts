import { Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {RecapComponent} from "./recap/recap.component";

export const routes: Routes = [
  {
    path: "recap",
    component: RecapComponent,
    data: { title: 'Recapitulatif' }
  },
  {
    path: "liste",
    component: TodoListComponent,
    data: { title: 'Liste' }
  },
];
