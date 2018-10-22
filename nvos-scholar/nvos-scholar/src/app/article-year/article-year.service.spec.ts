import { TestBed } from '@angular/core/testing';

import { ArticleYearService } from './article-year.service';

describe('ArticleYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleYearService = TestBed.get(ArticleYearService);
    expect(service).toBeTruthy();
  });
});
