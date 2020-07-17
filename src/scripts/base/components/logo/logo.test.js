import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';
import { Logo } from '@scripts/base/components/logo/logo';

describe('Logo', () => {
  function mount(){
    return shallow(
      <Logo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-logo');
  });

  it('should contain a link to home', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).prop('to')).toEqual('/');
  });

  it('should contain an icon', () => {
    const wrapper = mount();
    expect(wrapper.find(Icon).prop('name')).toEqual('rc');
  })
});
