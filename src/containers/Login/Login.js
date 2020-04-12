import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {    
    Input, 
    Button, 
    Form,
    Header,
    Image,
    Message,
    Card
} from 'semantic-ui-react';

import { userFetchLogin } from 'actions';
import { isUserLoggedIn } from 'helpers';
import './login.css';

class Login extends Component {
    state = {
        show: false
    }

    handleSubmit = event => {
        event.preventDefault();
        const { loginUser } = this.props;
        const data = new FormData(event.target);

        const username = data.get('username');
        const password = data.get('password');

        if (username && password){
            loginUser({
                'email': username,
                'password': password,
            });
        }
    }

    handlePasswordClick = event => {
        event.preventDefault();
        this.setState((prevState) => ({show: !prevState.show}));
    }

    render() {
        const { loginError, loginUser, user } = this.props;

        if (isUserLoggedIn()) {
            return ( <Redirect to="/messages"/> );
        }

        const { show } = this.state;
        const passwordType = show ? 'text' : 'password';

        return (
            <div className='login'>   
                <Card 
                    fluid 
                    color='orange' 
                    centered 
                    raised
                >
                    <Card.Content textAlign='center'>
                        <Image
                            centered
                            size='small'
                            src={process.env.PUBLIC_URL + '/assets/orange-pencil.png'}
                        />
                        <Header 
                            as='h1' 
                            textAlign='center'
                        >
                            <Header.Content className='login__header'>Login</Header.Content>
                        </Header>
                    </Card.Content>
                    <Card.Content>
                        <Form 
                            size='large'
                            error={!!loginError}
                            onSubmit={this.handleSubmit}>
                            <Form.Field
                                id='username'
                                control={Input}
                                label='Username'
                                name='username'
                                required
                                placeholder='test@email.com'
                            />                
                            <Form.Field
                                id='password'
                                control={Input}
                                label='Password'
                                required
                                placeholder='Password'>
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
                            <Header>
                                <Header.Subheader>Forgot your password? Click <a href='/forgot-password'>here</a> to reset it</Header.Subheader>
                            </Header>
                            <Message
                                error
                                header='Oops 🙈'
                                content='That password and email combination does not exist'/>
                            <Button primary fluid type='submit'>Submit</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </div>

        );
    }
};

const mapDispatchToProps = ( dispatch ) => ({
	loginUser: ( user ) => {
		dispatch( userFetchLogin( user ) );
	},
});

const mapStateToProps = ( state ) => ({
    loginError: state.loginError,
    user: state.user,
});

export default connect( mapStateToProps, mapDispatchToProps )( Login );