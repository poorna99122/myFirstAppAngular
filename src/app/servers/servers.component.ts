import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  // onUpdateServerName(event: any) {
  //   // console.log(event);
  //   this.serverName =(<HTMLInputElement>event.target).value;
  // }




  

//   textbox1_change(event: any){

//     console.log(event.target.value);
//     document.getElementById('textbox2').style.display='none';
  

 
//  }
}
