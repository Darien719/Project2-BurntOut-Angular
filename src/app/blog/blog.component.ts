import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blogInfo } from '../services/blogInfo';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pageTitle = "Blog";
  bInfo: blogInfo = { "username": "", "message": "", "title": "" }

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

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
}
