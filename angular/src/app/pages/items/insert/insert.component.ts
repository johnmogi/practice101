import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  public post = new PostModel();
  constructor() {


  }

  addPost() {
    console.log(this.post);

  }
  ngOnInit(): void {
  }

}
