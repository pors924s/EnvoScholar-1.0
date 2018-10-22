import { TestBed } from '@angular/core/testing';

import { ArticleSummaryService } from './article-summary.service';

describe('ArticleSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleSummaryService = TestBed.get(ArticleSummaryService);
    expect(service).toBeTruthy();
  });
});
