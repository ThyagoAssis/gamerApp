import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  products1 =  {title: 'Ryzen 5 1600', img: 'https://img.telemart.ua/181596-441299-product_popup/amd-ryzen-5-1600-3236ghz-sam4-box-yd1600bbafbox.png', price: 'R$ 724,50'};
  products2 =  {title: 'RTX 2060 TI', img: 'https://cdn.pixabay.com/photo/2016/04/08/12/15/the-gpu-1316015__340.png', price: 'R$ 5.567,13'};
  constructor() { }

  ngOnInit() {
  }

}
