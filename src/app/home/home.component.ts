import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sub: any;
  route: any;
  @Input('name') public name1;

  @Output() public childEvent_home = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.sub = this.route.data.subscribe(v => console.log(v));
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  firstEvent_home(){
    console.log('hello in home');
    this.childEvent_home.emit('Hello How r u from home?');
  }

}
