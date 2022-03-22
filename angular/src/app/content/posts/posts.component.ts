import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: PostModel[] = []
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllItems().subscribe(
      (posts) => (this.posts = posts,
        console.log(this.posts)),
      (err) => alert(err.message));
  }
}
