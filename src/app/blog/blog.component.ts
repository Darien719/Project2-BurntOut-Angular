import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blogInfo } from '../services/blogInfo';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pageTitle = "Blog";
  bInfo: blogInfo = { "blogId": null, "date": null, "message": "", "title": "", "username": "" }

  constructor(private blogService: BlogService, private sessServ: SessionService) { }

  ngOnInit(): void {
    this.getallPosts();
    if (this.sessServ.verifySession()) {

    } else {
      window.location.href = '/login';
    }
  }

  posts: blogInfo[];
  blogMessageText = "";
  blogTitleText = "";

  get blogMessage(): string {
    return this.blogMessageText;
  }

  set blogMessage(temp: string) {
    this.blogMessageText = temp;
  }

  get blogTitle(): string {
    return this.blogTitleText;
  }

  set blogTitle(temp: string) {
    this.blogTitleText = temp;
  }


  sendData() {
    this.bInfo.message = this.blogMessageText;
    this.bInfo.title = this.blogTitleText;
    this.blogService.postBlog(this.bInfo).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getallPosts(): void {
    this.blogService.retrieveAllPosts().subscribe(response => {
      this.posts = Object.values(response);
      console.log(this.posts);
    })
  }
}
