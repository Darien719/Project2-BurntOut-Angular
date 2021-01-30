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
  isNewPostVisible = true;
  isNewPostFormVisible = false;
  bInfo: blogInfo = { "blogId": null, "date": null, "message": "", "title": "", "username": "" };
  page: Number = 1;

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

  // toggles the add button on and off.
  newPostClicked() {
    this.isNewPostVisible = false;
    this.isNewPostFormVisible = true;
  }

  // toggles the new post form.
  closeButtonClicked() {
    this.isNewPostFormVisible = false;
    this.isNewPostVisible = true;
  }

  // getter for the blog Message also used for data binding
  get blogMessage(): string {
    return this.blogMessageText;
  }

  // setter for the blog Message also used for data binding
  set blogMessage(temp: string) {
    this.blogMessageText = temp;
  }

  // getter for the blog Message also used for data binding
  get blogTitle(): string {
    return this.blogTitleText;
  }

  // setter for the blog Message also used for data binding
  set blogTitle(temp: string) {
    this.blogTitleText = temp;
  }

  // Sends data to the back-end once the user fill the form and clicks the submit button.
  sendData() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    this.bInfo.blogId = user["userId"];

    this.bInfo.username = user["username"];

    if (this.blogTitleText === "") {
      var titleField = document.getElementById("title-field");
      titleField.style.backgroundColor = '#9f0000';
    }

    if (this.blogTitleText != "") {
      var titleField = document.getElementById("title-field");
      titleField.style.backgroundColor = 'rgb(211, 211, 211)';
    }

    if (this.blogMessageText != "") {
      var titleField = document.getElementById("blog-message");
      titleField.style.backgroundColor = 'rgb(211, 211, 211)';
    }

    if (this.blogMessageText === "") {
      var messageField = document.getElementById("blog-message");
      messageField.style.backgroundColor = '#9f0000';
    }

    if (this.blogTitleText != "" && this.blogMessageText != "") {
      this.bInfo.message = this.blogMessageText;
      this.bInfo.title = this.blogTitleText;
      this.blogService.postBlog(this.bInfo).subscribe(
        response => {
          window.location.reload();
        }
      );
    }
  }

  //gets all of the blogs from the back-end to display on the front-end.
  getallPosts(): void {
    this.blogService.retrieveAllPosts().subscribe(response => {
      console.log(response);
      this.posts = Object.values(response);
      this.posts = this.posts.reverse();
    })
  }
}
