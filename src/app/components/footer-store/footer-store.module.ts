import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FooterStoreComponent } from './footer-store.component';
import { FooterStoreRoutingModule } from '../footer-store-routing.module';



@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterStoreRoutingModule
    
  ],
  declarations: [FooterStoreComponent],
})
export class FooterStoreModule { }
