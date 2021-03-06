import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { items } from '../../mock-items'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  // items = items;
  public posts: PostModel[] = []
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllItems().subscribe(
      (posts) => (this.posts = posts,
        console.log(this.posts)),
      (err) => alert(err.message));
  }

}

