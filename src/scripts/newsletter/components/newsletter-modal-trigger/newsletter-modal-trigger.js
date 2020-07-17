import React, { Component } from 'react';
import { Button } from '@scripts/base/components/button/button';
import { RNewsletterForm } from '@scripts/newsletter/components/newsletter-form/newsletter-form';
import modalService from '@scripts/base/services/modal/modal';

export class RNewsletterModalTrigger extends Component {
  openNewsletterModal = () => {
    const modal = modalService.open({
      title: 'Newsletter',
      content: <RNewsletterForm lang={ this.props.lang } />,
      width: '350px'
    });
  };

  render(){
    return (
      <span className="r-newsletter-modal-trigger">
        <Button theme="link" onClick={ this.openNewsletterModal }>
          { this.props.children }
        </Button>
      </span>
    );
  }
}
