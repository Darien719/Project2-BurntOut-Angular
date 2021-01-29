import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let router: Router;
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [],
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should have welcome", () => {
    fixture.detectChanges();
    let header = fixture.debugElement.query(By.css("#title")).nativeElement; 
    expect(header.innerHTML).toBe("Welcome to BurntOut!");
  });
  
    it("should have the body content", () => {
      fixture.detectChanges();
      let pageTitle = fixture.debugElement.query(By.css("p")).nativeElement;
      expect(pageTitle.innerHTML).toContain("Lorem ipsum dolor sit amet, consectetur");
    });
  
});
