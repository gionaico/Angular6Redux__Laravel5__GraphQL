import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  ArticlesService,
  AuthGuard,
  DevicesService,
  CategoryService,
  CartService,
  ContactService,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService,
  FavouriteService
} from "./services";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ArticlesService,
    DevicesService,
    CartService,
    CategoryService,
    ContactService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService,
    FavouriteService
  ],
  declarations: []
})
export class CoreModule { }
