import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-store',
  templateUrl: './footer-store.component.html',
  styleUrls: ['./footer-store.component.scss'],
})
export class FooterStoreComponent implements OnInit {
  color = 'light';

  constructor() { }

  ngOnInit() {

  }

  mudacor(botao) {
    console.log(botao);
    if(botao == 'store'){
      this.color = 'light';
    }else {
      this.color = 'primary';
    }

  }


}
