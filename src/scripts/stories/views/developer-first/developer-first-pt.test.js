import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RDeveloperFirstPT } from './developer-first-pt';

describe('Developer First PT', () => {
  function mount(){
    return shallow(
      <RDeveloperFirstPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport)).toBeDefined();
  });
});
