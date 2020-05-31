import React from 'react';
import { shallow } from 'enzyme';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { RStoryRelations } from '@scripts/stories/components/story-relations/story-relations';
import { RStoryFooter } from './story-footer';

describe('Story Footer', () => {
  function mount(props = {}){
    return shallow(
      <RStoryFooter storyRelationIds={ props.storyRelationIds } lang={ props.lang } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-footer');
  });

  it('should contain Story Relations component', () => {
    const storyRelationIds = ['a', 'b'];
    const lang = 'pt';
    const wrapper = mount({ storyRelationIds, lang });
    expect(wrapper.find(RStoryRelations).prop('ids')).toEqual(storyRelationIds);
    expect(wrapper.find(RStoryRelations).prop('lang')).toEqual(lang);
  });

  it('should contain Pitsby Promo component', () => {
    const wrapper = mount();
    expect(wrapper.find(RPitsbyPromo).length).toEqual(1);
  });
});
