import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  environment
} from '@environments/environment';

import {
  HomeComponent
} from './home/home.component';
import { ProductCategoryModule } from './product-category/product-category.module';


const appRoutes: Routes = [{
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    loadChildren: () => import('./app-user/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'register',
    loadChildren: () => import('./app-user/register/register.module').then((m) => m.RegisterModule),
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./app-user/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
  },

  {
    path: 'reset-password',
    loadChildren: () => import('./app-user/reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
  },

  {
    path: 'email-send',
    loadChildren: () => import('./app-user/email-send/email-send.module').then((m) => m.EmailSendModule),
  },

  {
    path: 'catalog',
    loadChildren: () => import('./product-category/product-category.module').then((m) => m.ProductCategoryModule),
    data: {
      breadcrumb: 'Product Category',
    },
  },

  {
    path: 'products',
    children: [{
        path: '',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        data: {
          breadcrumb: "Products"
        }
      },
      {
        path: 'product-detail',
        loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule),
        data: {
          breadcrumb: 'product'
        }
      },
    ]
  },

  {
    path: 'catalog',
    loadChildren: () => import('./product-category/product-category.module').then((m) => m.ProductCategoryModule),
  },

  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./page/terms-and-conditions-page/terms-and-conditions-page.module').then((m) => m.TermsAndConditionsPageModule),
  },

  {
    path: 'contact',
    loadChildren: () => import('./page/contact/contact.module').then((m) => m.ContactModule),
  },

  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then((m) => m.SearchResultModule),
  },

  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },

  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },

  {
    path: 'account',
    loadChildren: () => import('./my-account/my-account.module').then((m) => m.MyAccountModule ),
  },

  {
    path: 'error',
    loadChildren: () => import('./page/error-page/error-page.module').then((m) => m.ErrorPageModule ),
  },
  

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}