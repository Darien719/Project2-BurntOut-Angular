import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../services/blog.service';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  class MockService {
    postBlog() { }
    retrieveAllPosts() { }
  }

  let dummyPosts = {
    blogId: "",
    title: "",
    date: "",
    message: "",
    username: ""
  }

  let router: Router;
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;
  let mockClient: { get: jasmine.Spy, post: jasmine.Spy };


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [BlogComponent],
      providers: [
        { provide: BlogService, useClass: MockService },
        { provide: HttpClient, useValue: mockClient }
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    blogService = TestBed.inject(BlogService);
    mockClient = TestBed.get(HttpClient);
    component.isNewPostFormVisible = false;
    component.isNewPostVisible = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h3 say blog', () => {
    fixture.detectChanges();
    let pageTitle = fixture.debugElement.query(By.css("#pageTitle")).nativeElement;
    console.log(pageTitle)
    expect(pageTitle.innerHTML).toBe("Blog");
  });

});
