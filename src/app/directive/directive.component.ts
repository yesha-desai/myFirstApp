import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive',
  //templateUrl: './directive.component.html',
  template: `<p>{{name1}}</p>
  <button (click)="firstEvent()">Click</button>`,
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  @Input('name') public name1;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  firstEvent(){
    this.childEvent.emit('Hello How r u ?');
  }

}
