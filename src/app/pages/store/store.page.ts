import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  products1 =  {title: 'Ryzen 5 1600', img: 'https://img.telemart.ua/181596-441299-product_popup/amd-ryzen-5-1600-3236ghz-sam4-box-yd1600bbafbox.png', price: 'R$ 724,50'};
  products2 =  {title: 'RTX 2060 TI', img: 'https://lh3.googleusercontent.com/proxy/tZb-RCHf1ywHLIdKdW-r4wFWPPwNG2fEQFbbITVCYG3v4HqthDmaQqwOJbofkX-a7T8nYlqcNzUiuIfVETXWwQwArG2BUbBmnvYkU8ZMWk-Jp1g_4rAbXpuOgG9kfbhLE8Xi_NylVS4A9w', price: 'R$ 5.567,13'};

  products3 =  {title: 'XPG xpectrix d50', img: 'https://img.terabyteshop.com.br/produto/g/memoria-ddr4-xpg-spectrix-d50-8gb-3200mhz-rgb-white-ax4u320038g16a-sw50_107969.png', price: 'R$ 1.809,00'};
  products4 =  {title: 'SSD Adata XPG SX8100 256GB', img: 'https://cdn.mos.cms.futurecdn.net/oVMicCXLXSdY4aNpzwvQcZ-480-80.png', price: 'R$ 324,80'}
 

  
  constructor() { }

  ngOnInit() {
  }

}
