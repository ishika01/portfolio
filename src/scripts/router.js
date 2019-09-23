import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import RRouterListener from '@scripts/base/components/router-listener/router-listener';
import { Skills } from '@scripts/skills/skills';
import { Stories } from '@scripts/stories/stories';

export class AppRouter extends Component {
  render(){
    return (
      <Router>
        <RRouterListener>
          <ScrollToTop>
            <Route path="/" onChange={ this.onRouteChange } exact component={ Home } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/experience" exact component={ Experience } />
            <Route path="/projects" exact component={ Projects } />
            <Route path="/recommendations" exact component={ Recommendations } />
            <Route path="/skills" exact component={ Skills } />
            <Route path="/stories" exact component={ Stories } />
          </ScrollToTop>
        </RRouterListener>
      </Router>
    );
  }
}
