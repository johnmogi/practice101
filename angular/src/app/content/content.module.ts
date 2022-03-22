import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';

const ContentRoutes = [
  { path: '', component: PostsComponent }
]

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule {


}
