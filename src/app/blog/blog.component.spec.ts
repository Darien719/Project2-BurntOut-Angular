import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogService } from '../services/blog.service';
import { BlogComponent } from './blog.component';
import { observable, Observable, of } from 'rxjs';
import { blogInfo } from '../services/blogInfo';


fdescribe('BlogComponent', () => {

  class MockService {
    postBlog() { }
    retrieveAllPosts() { }
  }

  let mockData;
  let mockedService;

  let router: Router;
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;
  let mockClient: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };


  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [BlogComponent]
  //   })
  //     .compileComponents();
  // });

  beforeEach(() => {
    mockData = {
      blogId: 1,
      title: "",
      date: null,
      message: "",
      username: ""
    }
    mockedService = jasmine.createSpyObj("", ['retrieveAllPosts']);
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule, RouterTestingModule.withRoutes([])],
      declarations: [BlogComponent],
      providers: [
        { provide: BlogService, useValue: mockedService },
        { provide: HttpClient, useValue: mockClient }
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    mockedService.retrieveAllPosts.and.returnValue(of(mockData));
    router = TestBed.inject(Router);
    mockClient = TestBed.get(HttpClient);
    component.isNewPostFormVisible = false;
    component.isNewPostVisible = true;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
