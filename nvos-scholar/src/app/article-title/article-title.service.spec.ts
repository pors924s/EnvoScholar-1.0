import { TestBed } from '@angular/core/testing';

import { ArticleTitleService } from './article-title.service';

describe('ArticleTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleTitleService = TestBed.get(ArticleTitleService);
    expect(service).toBeTruthy();
  });
});
