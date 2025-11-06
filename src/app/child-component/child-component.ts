import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  @Input() message! : string 
  @Output() Clicked = new EventEmitter<string>();

  onClick(){
    this.Clicked.emit("Child Component is Clicked");
  }
}
