import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleYearComponent } from './article-year.component';

describe('ArticleYearComponent', () => {
  let component: ArticleYearComponent;
  let fixture: ComponentFixture<ArticleYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
