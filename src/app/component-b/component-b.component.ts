import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  constructor() { }

  public getdata;
  public displaydata;

  ngOnInit() {
    this.getdata = history.state.data;
    console.log('data: ',this.getdata.name);
    this.displaydata = this.getdata.name;
  }

}
