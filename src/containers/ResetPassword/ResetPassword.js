import React, { Component } from 'react';
import { connect } from 'react-redux';
import {    
    Input, 
    Button, 
    Form,
    Header,
    Image,
    Message,
    Card
} from 'semantic-ui-react';

import './ResetPassword.css';
import { resetUserPassword } from 'actions';

export class ResetPassword extends Component {
    state = {
        resetPasswordSent: false
    }
    
  resetPasswordHandler = () => {
      resetUserPassword();
    }

    render() {
      let page = (
        <div className='ResetPassword'>   
          <Card 
            fluid 
            color='green' 
            centered 
            raised
              >
              <Card.Content textAlign='center'>
              <Image
                centered
                size='tiny'
                src={process.env.PUBLIC_URL + '/assets/logo.png'}
                />
                  <Header 
                      as='h1' 
                      textAlign='center'
                  >
                      <Header.Content className='ResetPassword__Header'>Reset Password</Header.Content>
                      <Header.Subheader>Forgotten your password? No problem - just enter your email address below and we'll send you a link to reset your password</Header.Subheader>
                  </Header>
              </Card.Content>
              <Card.Content>
                  <Form 
                      size='large'
                      //error={!!resetPasswordError}
                      onSubmit={this.resetPasswordHandler}
                      >
                      <Form.Field
                          id='email'
                          control={Input}
                          label='Email address'
                          name='email'
                          required
                          placeholder='test@email.com'
                      />
                      <Message
                          error
                          header='Oops 🙈'
                          content='We could not find an account for this email address'/>
                      <Button primary fluid type='submit'>Submit</Button>
                  </Form>
              </Card.Content>
          </Card>
        </div>
      )

      if (this.state.resetPasswordSent) {
          page = (
            <div className='ResetPassword'>
              <Card 
                fluid 
                centered 
                raised
                  >
                <Card.Content textAlign='center'>
                  <Image
                      centered
                      size='tiny'
                      src={process.env.PUBLIC_URL + '/assets/logo.png'}
                  />
                  <Header 
                      as='h1' 
                      textAlign='center'
                  >
                  <Header.Subheader>If your email address is registered with us, we will send you a link to reset your password, please check your inbox</Header.Subheader>
                  </Header>
                </Card.Content>
              </Card>
            </div>
          )
      }

      return (
          <div>   
              {page}
          </div>

        );
    }
};

const mapStateToProps = ( state ) => ({
  resetPassword: state.resetPassword
})

const mapDispatchToProps = ( dispatch ) => ({
	  resetPassword: ( email ) => {
		dispatch( resetUserPassword( email ) );
	}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( ResetPassword );