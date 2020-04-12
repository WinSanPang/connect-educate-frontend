import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './AskAQuestion.css';
import QuestionFrom from '../../components/AskAQuestion/QuestionForm';

export class AskAQuestion extends Component {

  render() {

    return (
      <Container className='AskAQuestion'>
        <QuestionFrom/>
      </Container>
    );
  }
}