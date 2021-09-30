import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  //Endereço do Logo
  logo = 'assets/logo/logo.png';
  constructor() { }

  ngOnInit() {
  }

}
