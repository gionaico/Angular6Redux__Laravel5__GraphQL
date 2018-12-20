import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DeviceComponent } from './device.component';
// { ArticleCommentComponent } from './article-comment.component';
import { DeviceResolver } from './device-resolver.service';
//import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DeviceRoutingModule
  ],
  declarations: [
    DeviceComponent,
    //ArticleCommentComponent,
    //MarkdownPipe
  ],

  providers: [
    DeviceResolver
  ]
})
export class DeviceModule {}
