import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blogInfo } from "./blogInfo";
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = "http://localhost:9025/blogs/add";
  private allPostsurl = "http://localhost:9025/blogs/all";

  constructor(private httpCli: HttpClient) {
  }

  postBlog(blog: blogInfo): Observable<string> {
    return this.httpCli.post<string>(this.url, JSON.stringify(blog), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }

  retrieveAllPosts(): Observable<blogInfo> {
    return this.httpCli.get<blogInfo>(this.allPostsurl);
  }
}
