import { TestBed } from '@angular/core/testing';

import { ArticleInformationService } from './article-information.service';

describe('ArticleInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleInformationService = TestBed.get(ArticleInformationService);
    expect(service).toBeTruthy();
  });
});
