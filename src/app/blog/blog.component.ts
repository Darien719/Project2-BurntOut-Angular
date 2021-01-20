import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  pageTitle = "Blog";


  constructor() { }

  ngOnInit(): void {
  }

  blogMessageText = "";

  get blogMessage(): string {
    return this.blogMessageText;
  }

  set blogMessage(temp: string) {
    this.blogMessageText = temp;
  }

  setTittle() {
    this.pageTitle = this.blogMessageText;
  }





}
