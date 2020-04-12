import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import QuestionFrom from '../../components/AskAQuestion/QuestionForm'

export class AskAQuestion extends Component {

  render() {

    return (
      <div>
        <QuestionFrom/>
      </div>
    );
  }
}

export default AskAQuestion;
