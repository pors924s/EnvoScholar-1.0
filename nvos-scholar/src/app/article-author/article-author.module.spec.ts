import { ArticleAuthorModule } from './article-author.module';

describe('ArticleAuthorModule', () => {
  let articleAuthorModule: ArticleAuthorModule;

  beforeEach(() => {
    articleAuthorModule = new ArticleAuthorModule();
  });

  it('should create an instance', () => {
    expect(articleAuthorModule).toBeTruthy();
  });
});
