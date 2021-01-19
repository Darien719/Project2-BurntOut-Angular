import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForJobComponent } from './search-for-job.component';

describe('SearchForJobComponent', () => {
  let component: SearchForJobComponent;
  let fixture: ComponentFixture<SearchForJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
