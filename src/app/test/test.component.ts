import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  serverName = '';
  serverStatus = 'No server is created !';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverStatus = 'Server is created with name as - '+ this.serverName;
  }

}
