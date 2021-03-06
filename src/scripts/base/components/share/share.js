import React, { Component } from 'react';
import { Button } from '@scripts/base/components/button/button';
import { Icon } from '@scripts/base/components/icon/icon';
import analyticsService from '@scripts/base/services/analytics/analytics';
import localesService from '@scripts/base/services/locales/locales';
import routeService from '@scripts/base/services/route/route';

export class Share extends Component {
  constructor(props){
    super(props);
    this.setTexts(localesService.get(props.lang, 'Share'));
  }

  setTexts = texts => {
    this.texts = texts;
  };

  onClick = () => {
    const { message, url } = this.props;
    const tweet = `${ this.texts.tweetPrefix } "${message}" ${url}`;
    routeService.openUrl('https://twitter.com/intent/tweet', { text: tweet });
    analyticsService.trackEvent('twitter share button clicked', { url, tweet });
  };

  render() {
    return (
      <span className="r-share" lang={ this.props.lang }>
        <Button
          theme="primary"
          onClick={ this.onClick }
          iconName="twitter">
          { this.texts.label }
        </Button>
      </span>
    );
  }
}
