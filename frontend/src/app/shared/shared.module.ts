import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { DeviceListComponent ,DevicePreviewComponent } from './list-device';
import { FilterComponent } from './filter';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { PaginationComponent } from "./pagination";
import { SociaLoginComponent } from "./social-login";
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FilterComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    DeviceListComponent,
    DevicePreviewComponent,
    PaginationComponent,
    SociaLoginComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FilterComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    DeviceListComponent,
    DevicePreviewComponent,
    PaginationComponent,
    SociaLoginComponent
  ]
})
export class SharedModule {}
