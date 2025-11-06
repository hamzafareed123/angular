import { Component } from '@angular/core';
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  message = "Hello From Parent"
  childMessage:string= ""
  onChildClick(message:string){
    console.log(message)
    this.childMessage=message
  }
}
