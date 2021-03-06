import React from 'react';
import { shallow } from 'enzyme';
import { HomeHero } from '@scripts/home/components/home-hero/home-hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { Home } from '@scripts/home/home';

describe('Home', () => {
  function mount(){
    return shallow(<Home />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a home hero', () => {
    const wrapper = mount();
    expect(wrapper.find(HomeHero).length).toEqual(1);
  });
});
