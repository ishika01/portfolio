import storySummaries from '@scripts/stories/constants/story-summaries';
import { RComponentMaturityModelPT } from '@scripts/stories/views/component-maturity-model/component-maturity-model-pt';
import storiesService from './stories';

describe('Stories Service', () => {
  it('should get story summaries', () => {
    const sumaries = storiesService.getSummaries();
    expect(sumaries).toEqual(storySummaries);
  });

  it('should get public story summaries only', () => {
    const summaries = [ { private: true }, {} ];
    storiesService.getSummaries = jest.fn(() => summaries);
    const sumaries = storiesService.getPublicSummaries();
    expect(sumaries.length).toEqual(1);
  });

  it('should get summary with views', () => {
    const summaries = storiesService.getSummaryWithViews();
    const lastSummary = summaries[summaries.length - 1];
    expect(lastSummary.view).toEqual(RComponentMaturityModelPT)
  });

  it('should find a summary by url path', () => {
    const sumary = storiesService.findSummaryByUrlPath('/component-maturity-model');
    expect(sumary.title).toEqual('Component maturity model');
  });
});
