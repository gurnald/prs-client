import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';
import { sortPipe } from './sort.pipe';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestApproveRejectComponent } from './request/request-approve-reject/request-approve-reject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSearchPipe,
    UserLoginComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchPipe,
    BoolDisplayPipe,
    sortPipe,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestSearchPipe,
    RequestReviewsComponent,
    RequestReviewItemComponent,
    RequestlineEditComponent,
    RequestlineCreateComponent,
    RequestLinesComponent,
    RequestApproveRejectComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }