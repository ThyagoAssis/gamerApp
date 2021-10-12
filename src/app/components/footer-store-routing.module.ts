import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterStoreComponent } from "./footer-store/footer-store.component";

const routes: Routes = [
    {
        path: 'footer-store', 
        component: FooterStoreComponent,
        children: [            
            {
                path: 'store',
                loadChildren: () => import('../pages/store/store.module').then( m => m.StorePageModule)
              },
              {
                path: 'favorites',
                loadChildren: () => import('../pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
              },
              {
                path: 'checkout',
                loadChildren: () => import('../pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
              },
        ],
    },
    {
        path: '',
        redirectTo: 'footer-store/store',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class FooterStoreRoutingModule{}