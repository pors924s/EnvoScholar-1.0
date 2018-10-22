import { ArticleSummaryModule } from './article-summary.module';

describe('ArticleSummaryModule', () => {
  let articleSummaryModule: ArticleSummaryModule;

  beforeEach(() => {
    articleSummaryModule = new ArticleSummaryModule();
  });

  it('should create an instance', () => {
    expect(articleSummaryModule).toBeTruthy();
  });
});
