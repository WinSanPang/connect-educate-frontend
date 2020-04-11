import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import Layout from '../../components/Layout/Layout';
import QuestionFrom from '../../components/AskForHelp/QuestionForm'

export class AskAQuestion extends Component {

  render() {

    return (
      <div>
        <Layout/>
        <QuestionFrom/>
      </div>
    );
  }
}

export default AskAQuestion;
