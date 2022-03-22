import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public myApi = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.myApi + "posts");
  }

  // public addPostAsync(post: PostModel): Promise<PostModel> {
  //   return this.http.post<PostModel>('http://localhost:3000/api/posts',
  //   post).toPromise();
  // }
}
