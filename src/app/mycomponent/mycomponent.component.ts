import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  // userNameIsEmpty = true;
  username = '';

  constructor() { }

  ngOnInit() {
  }

  // onUpdateUserName(event: Event){
  //   this.userNameIsEmpty = (<HTMLInputElement>event.target).value.length == 0;
  // }

  // onResetUserName(){
  //   this.username = '';
  //   this.userNameIsEmpty = true;
  // }
}
