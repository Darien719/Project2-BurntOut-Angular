import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs/internal/observable/of';
import { BlogService } from '../services/blog.service';
import { BlogComponent } from './blog.component';


fdescribe('BlogComponent', () => {
  let router: Router;
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;
  let mockClient: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  let mockedPost = [
    {
      blogId: 1,
      blogTitle: "Hello",
      date: "2020-01-04",
      owner: "cocoa"
    }
  ]


  let mockService = {
    retrieveAllPosts: <Observable>() => {
      return of(mockedPost);
    },
    postBlog() { }
  }
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
        { provide: BlogService, useValue: mockService },
        { provide: HttpClient, useValue: mockClient }
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    mockClient = TestBed.get(HttpClient);
    component.isNewPostFormVisible = false;
    component.isNewPostVisible = true;
  });

  it('should create', () => {
    fixture.detectChanges();
    spyOn(mockService, 'retrieveAllPosts').and.returnValue(of(mockedPost));
    expect(component).toBeTruthy();
  });

  it("should have 'blog' at the top of the screen", () => {
    fixture.detectChanges();
    spyOn(mockService, 'retrieveAllPosts').and.returnValue(of(mockedPost));
    let pageTitle = fixture.debugElement.query(By.css("h3")).nativeElement;
    expect(pageTitle.innerHTML).toBe("Blog");
  });

});
