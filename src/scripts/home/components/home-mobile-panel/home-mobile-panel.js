import '@styles/home-mobile-panel.styl'
import React, { Component } from 'react';
import { Mobile } from '@scripts/base/components/mobile/mobile';

export class HomeMobilePanel extends Component {
  constructor(props){
    super(props);
    this.setScreenshotsCount(0);
    this.state = { className: 'r-home-mobile-panel' };
  }
  onScreenshotLoad(){
    if(this.screenshotsCount > 0)
      this.setState({ className: 'r-home-mobile-panel r-home-mobile-panel-visible' });
    else
      this.incrementScreenshotCounter();
  }
  incrementScreenshotCounter(){
    this.setScreenshotsCount(this.screenshotsCount + 1);
  }
  setScreenshotsCount(count){
    this.screenshotsCount = count;
  }
  render() {
    return (
      <div className={ this.state.className }>
        <Mobile screenshot="pitsby.svg" onScreenshotLoad={ this.onScreenshotLoad.bind(this) } />
        <Mobile screenshot="nashios.svg" onScreenshotLoad={ this.onScreenshotLoad.bind(this) } />
      </div>
    );
  }
}
