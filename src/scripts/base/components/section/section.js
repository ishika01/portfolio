import '@styles/section.styl';
import React, { Component } from 'react';
import { Container } from '@scripts/base/components/container/container';

const BASE_CLASS_NAME = 'r-section';

export class Section extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props.theme, props.size) };
  }
  render() {
    return (
      <section className={ this.state.className }>
        <Container>
          { this.props.children }
        </Container>
      </section>
    );
  }
}

function buildClassName(theme, size){
  return `${BASE_CLASS_NAME} ${buildThemeCssClass(theme)} ${buildSizeCssClass(size)}`.trim();
}

function buildThemeCssClass(theme){
  return theme == 'primary' ? `${BASE_CLASS_NAME}-theme-primary` : '';
}

function buildSizeCssClass(size){
  const prefix = `${BASE_CLASS_NAME}-size`;
  switch (size) {
    case 'small':
      return `${prefix}-small`;
    case 'large':
      return `${prefix}-large`;
    default:
      return ''
  }
}
