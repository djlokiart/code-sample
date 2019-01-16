import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { OrdersComponent } from './orders/orders.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
// import { AddComponent } from './product/add/add.component';
// import { ProductTableComponent } from './product/product-table/product-table.component';
// import { TemplateComponent } from './template/template.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  // This code was written special for the sample
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  // It's not used in a sample
  // {
  //   path: '',
  //   component: TemplateComponent,
  //   children: [{
  //     path: 'dashboard',
  //     component: DashboardComponent,
  //     canActivate: [AuthGuard]
  //   },
  //   {
  //     path: 'product',
  //     component: AddComponent,
  //     canActivate: [AuthGuard]
  //   },
  //   {
  //     path: 'product/:id',
  //     component: AddComponent,
  //     canActivate: [AuthGuard]
  //   },
  //   {
  //     path: 'order/:id',
  //     component: OrdersComponent,
  //     canActivate: [AuthGuard]
  //   },
  //   {
  //     path: 'product-table',
  //     component: ProductTableComponent,
  //     canActivate: [AuthGuard]
  //   },
  //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }]
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
