import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent-component/parent-component";
import { FormComponent } from "./form-component/form-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentCommunication');
}
