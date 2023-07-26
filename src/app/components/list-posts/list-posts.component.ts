import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts?: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOninit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7195/api/posts')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      })
  }
}

