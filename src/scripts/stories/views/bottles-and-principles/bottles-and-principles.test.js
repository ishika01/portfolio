import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { BottlesAndPrinciplesEN } from './bottles-and-principles-en';

describe('Bottles and Principles EN', () => {
  function mount(props = {}){
    return shallow(
      <BottlesAndPrinciplesEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
