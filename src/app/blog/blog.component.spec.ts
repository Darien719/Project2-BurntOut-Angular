import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogService } from '../services/blog.service';
import { BlogComponent } from './blog.component';
import { observable, Observable } from 'rxjs';

fdescribe('BlogComponent', () => {

  class MockService {
    postBlog() { }
    retrieveAllPosts() { }
  }

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
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule, RouterTestingModule.withRoutes([])],
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
});
