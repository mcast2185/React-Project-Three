import React, {Component} from 'react';

import Navigation from './navigation';
import Discussion from './discussion';
import PageContent from './page-content';
import Rules from './rules';
import Workflow from './workflow';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Devcamp </h1>
        <Navigation/>
        <PageContent/>
      </div>
    );
  }
}