import React from 'react';
import { shallow } from 'enzyme';
import { Section } from '@scripts/base/components/section/section';
import { Hero } from '@scripts/base/components/hero/hero';

describe('Hero', () => {
  function mount(props = {}){
    return shallow(
      <Hero title={props.title} size={ props.size }>
        { props.content }
      </Hero>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-hero');
  });

  it('should render some title', () => {
    const title = "Hello!"
    const wrapper = mount({ title });
    expect(wrapper.find('h1').text().trim()).toEqual(title);
  });

  it('should optinally set a small hero', () => {
    const wrapper = mount({ size: 'small' });
    expect(wrapper.find(Section).prop('size')).toEqual('small');
  });

  it('should optinally set a large hero', () => {
    const wrapper = mount({ size: 'large' });
    expect(wrapper.find(Section).prop('size')).toEqual('large');
  });

  it('should optionally render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
