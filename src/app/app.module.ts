import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    E404Component,
    HomeComponent,
    BoolDisplayPipe,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductSearchPipe,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestListComponent,
    RequestReviewItemComponent,
    RequestReviewsComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestSearchPipe,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserSearchPipe,
    UserListComponent,
    UserLoginComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorSearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
