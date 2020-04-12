import React, { Component } from 'react';
import { connect } from 'react-redux';
import {    
    Input, 
    Button, 
    Form,
    Header,
    Image,
    Card
} from 'semantic-ui-react';

import './ResetPassword.css';
import { resetUserPassword } from 'actions';

export class ResetPassword extends Component {
    state = {
        resetPassword: false,
        show: false
    }
    
  resetPasswordHandler = () => {
      resetUserPassword();
    }

  handlePasswordClick = event => {
      event.preventDefault();
      this.setState((prevState) => ({show: !prevState.show}));
  }

  render() {
    const { show } = this.state;
    const passwordType = show ? 'text' : 'password';

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
                    <Header.Subheader>Enter your new password below</Header.Subheader>
                </Header>
            </Card.Content>
            <Card.Content>
                <Form 
                    size='large'
                    onSubmit={this.resetPasswordHandler}
                    >
                    <Form.Field
                      id='newPassword'
                      control={Input}
                      label='New password'
                      name='newPassword'
                      required
                      placeholder='Enter your new password'>
                      <Input
                      type={passwordType}
                      name='password'
                      required
                      action={{
                          icon: show ? 'eye' : 'eye slash',
                          onClick: event => this.handlePasswordClick(event)
                      }}
                    />
                    </Form.Field>
                    <Form.Field
                      id='newPasswordConfirmed'
                      control={Input}
                      label='Confirm new password'
                      name='newPasswordConfirmed'
                      required
                      placeholder='Enter your new password again'>
                      <Input
                      type={passwordType}
                      name='password'
                      required
                      action={{
                          icon: show ? 'eye' : 'eye slash',
                          onClick: event => this.handlePasswordClick(event)
                      }}
                    />
                    </Form.Field>
                    <Button primary fluid type='submit'>Submit</Button>
                </Form>
            </Card.Content>
        </Card>
      </div>
    )

    if (this.state.resetPassword) {
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
                <Header.Subheader>Your password has been reset successfully - click <a href='/login'>here</a> to login</Header.Subheader>
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
	  resetPassword: ( reset_password_token, newPassword, newPasswordConfirmed ) => {
		dispatch( resetUserPassword( reset_password_token, newPassword, newPasswordConfirmed ) );
	}, 
});

export default connect( mapStateToProps, mapDispatchToProps )( ResetPassword );