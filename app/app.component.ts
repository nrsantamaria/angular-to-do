import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  //@Component is known as a decorator. Decorators are special pieces of syntax that configure elements like components. The decorator above tells Angular that the code following it defines a new component and should therefore have the functionalities outlined by Angular's own Component code imported at the top of the file.
  selector: 'app-root',
  //selector: 'app-root' defines what tag corresponds with the component. Because we want this root component rendered within the <app-root></app-root> tags in index.html, the component's selector property must also be app-root. A component's selector determines what its corresponding tags will look like.
  template: `
    <div class="container">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>

      <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      <hr>
      <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
      <new-task (newTaskSender)="addTask($event)"></new-task>
    </div>
  `
  //Now that the child TaskListComponent is prepared to receive data, we must instruct the parent to send it. We can do this in the task-list tags directly:
  //We use [ ] to signify an input. That is, data passing into the component whose tags these brackets are attached to (TaskListComponent, in our case). The name of the child component's @Input() is on the left in [square brackets]. The data being passed from the parent component is on the right in "quotations".

  //The "masterTaskList" refers to the list of data in the parent. By stating [childTaskList]="masterTaskList" in the <task-list> tags, we are sending the parent's masterTaskList to the child component's childTaskList input. Remember, childTaskList is our @Input. An input is like an inbox where children receive data from their parents.

  //The template portion (above) provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags.
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild)
  }
}
