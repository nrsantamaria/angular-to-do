import { Component } from '@angular/core';

@Component({
  //@Component is known as a decorator. Decorators are special pieces of syntax that configure elements like components. The decorator above tells Angular that the code following it defines a new component and should therefore have the functionalities outlined by Angular's own Component code imported at the top of the file.
  selector: 'app-root',
  //selector: 'app-root' defines what tag corresponds with the component. Because we want this root component rendered within the <app-root></app-root> tags in index.html, the component's selector property must also be app-root. A component's selector determines what its corresponding tags will look like.
  template: `
    <div class="container">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <ul>
        <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
      </ul>
    </div>
  `
  //The template portion (above) provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags.
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course"),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
//The class annotation, where our template property resides, determines how a component appears, whereas the class declaration defines how it behaves.
