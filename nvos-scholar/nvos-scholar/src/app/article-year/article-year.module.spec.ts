import { ArticleYearModule } from './article-year.module';

describe('ArticleYearModule', () => {
  let articleYearModule: ArticleYearModule;

  beforeEach(() => {
    articleYearModule = new ArticleYearModule();
  });

  it('should create an instance', () => {
    expect(articleYearModule).toBeTruthy();
  });
});
