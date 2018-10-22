import { ArticleTitleModule } from './article-title.module';

describe('ArticleTitleModule', () => {
  let articleTitleModule: ArticleTitleModule;

  beforeEach(() => {
    articleTitleModule = new ArticleTitleModule();
  });

  it('should create an instance', () => {
    expect(articleTitleModule).toBeTruthy();
  });
});
