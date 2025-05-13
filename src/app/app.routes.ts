import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';

export const routes: Routes = [
     { path: '', redirectTo: 'accueil', pathMatch: 'full' },
     { path: 'accueil', component: HomePage, title: 'Bienvenue sur NGMARKET' },
     {
          path: 'boutique',
          loadComponent: () => import('./ui/pages/shop/shop.page'),
          title: 'ESPACE BOUTIQUE',
     },
     {
          path: 'detail-produit/:produitId',
          loadComponent: () => import('./ui/pages/product-details/product-details.page'),
          title: 'DETAILS DU PRODUI',
     },
     {
          path: 'mon-panier',
          loadComponent: () => import('./ui/pages/cart/cart.page'),
          title: 'MON PANIER',
     },
     {
          path: 'se-connexion',
          loadComponent: () => import('./ui/pages/login/login.page'),
          title: 'CONNEXION A VOTRE COMPTE',
     },
     {
          path: '**',
          loadComponent: () => import('./ui/pages/not-found/not-found.page'),
          title: '404 - PAGE NON TROUVEE',
     }, // Page 404
];
