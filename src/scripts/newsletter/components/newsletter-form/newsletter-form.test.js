import React from 'react';
import { shallow } from 'enzyme';
import newsletterResource from '@scripts/newsletter/resources/newsletter';
import { RButton } from '@scripts/base/components/button/button';
import { RField } from '@scripts/base/components/field/field';
import { RForm } from '@scripts/base/components/form/form';
import { RNewsletterForm } from './newsletter-form';


describe('Newsletter Modal Trigger', () => {
  function mount(props = {}){
    const lang = props.lang || 'en';
    return shallow(
      <RNewsletterForm lang={ lang } />
    );
  }

  function setFieldValue(wrapper, fieldSelector, value){
    const field = wrapper.find(fieldSelector);
    const { name } = field.getElement().props;
    field.simulate('change', { target: { name, value } });
  }

  beforeEach(() => {
    newsletterResource.subscribe = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter-form');
  });

  it('should submit data on subscribe', () => {
    const wrapper = mount();
    setFieldValue(wrapper, 'input[name="name"]', 'Rafael');
    setFieldValue(wrapper, 'input[name="email"]', 'some@email.com');
    wrapper.find(RForm).prop('onSubmit')();
    expect(newsletterResource.subscribe).toHaveBeenCalledWith({
      email_address: 'some@email.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Rafael',
        LANG: 'English',
        PROJECT: 'portfolio'
      }
    });
  });

  it('should set success message on submit success', () => {
    const message = 'Thank you!';
    const wrapper = mount();
    expect(wrapper.find(RForm).prop('successMessage')).toEqual(undefined);
    wrapper.find(RForm).prop('onSubmitSuccess')();
    expect(wrapper.find(RForm).prop('successMessage')).toEqual(message);
  });

  it('should set an error message on submit error', () => {
    const message = 'Sorry, something went wrong. Please, try again.';
    const wrapper = mount();
    expect(wrapper.find(RForm).prop('errorMessage')).toEqual(undefined);
    wrapper.find(RForm).prop('onSubmitError')();
    expect(wrapper.find(RForm).prop('errorMessage')).toEqual(message);
  });

  it('should optionally render texts in portuguese', () => {
    const wrapper = mount({ lang: 'pt' });
    expect(wrapper.find(RField).at(0).prop('label')).toEqual('Nome');
    expect(wrapper.find(RField).at(1).prop('label')).toEqual('Email');
    expect(wrapper.find(RButton).at(0).prop('children')).toEqual('Inscrever-se');
    wrapper.find(RForm).prop('onSubmitSuccess')();
    expect(wrapper.find(RForm).prop('successMessage')).toEqual('Obrigado!');
    wrapper.find(RForm).prop('onSubmitError')();
    expect(wrapper.find(RForm).prop('errorMessage')).toEqual('Algo deu errado. Por favor, tente novamente.');
  });

  it('should optionally set subscription language as portuguese', () => {
    const wrapper = mount({ lang: 'pt' });
    setFieldValue(wrapper, 'input[name="name"]', 'Rafael');
    setFieldValue(wrapper, 'input[name="email"]', 'some@email.com');
    wrapper.find(RForm).prop('onSubmit')();
    expect(newsletterResource.subscribe).toHaveBeenCalledWith({
      email_address: 'some@email.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Rafael',
        LANG: 'Portuguese',
        PROJECT: 'portfolio'
      }
    });
  })
});