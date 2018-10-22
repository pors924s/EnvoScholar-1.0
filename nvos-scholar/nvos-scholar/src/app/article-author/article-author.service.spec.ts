import { TestBed } from '@angular/core/testing';

import { ArticleAuthorService } from './article-author.service';

describe('ArticleAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleAuthorService = TestBed.get(ArticleAuthorService);
    expect(service).toBeTruthy();
  });
});
