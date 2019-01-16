import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service';
import { AuthGuard } from './auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// It's not used in a sample
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { OrdersComponent } from './orders/orders.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AddComponent } from './product/add/add.component';
// import { DatePipe } from '@angular/common';
// import { ProductTableComponent } from './product/product-table/product-table.component';
// import { TemplateComponent } from './template/template.component';
// import { SuccessComponent } from './dialog/success/success.component';
// import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
// import { MatTabsModule, MatInputModule, MatSelectModule, MatIconModule,
//   MatDividerModule, MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
//   MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DashboardComponent,
    // OrdersComponent,
    // PageNotFoundComponent,
    // AddComponent,
    // ProductTableComponent,
    // TemplateComponent,
    // SuccessComponent,
    // ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // DragDropModule,
    // MatTabsModule,
    // MatInputModule,
    // MatSelectModule,
    // MatIconModule,
    // MatDividerModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatAutocompleteModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule,
    // MatDialogModule
  ],
  providers: [
    ConfigService,
    AuthGuard,
    // DatePipe
  ],
  // entryComponents: [
  //   SuccessComponent,
  //   ConfirmationComponent
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
