import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.scss']
})
export class PipecomponentComponent implements OnInit {

  public name = 'Yesha';
  public message = 'I am learning Angular!';

  public jsoninfo = {
    "first_name":"yesha",
    "last_name":"desai"
  }

  public datedemo = new Date();

  constructor() { }

  ngOnInit() {
  }

}
