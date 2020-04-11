
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from 'actions';

class Test extends Component {
	componentDidMount() {
		const { fetchMessages } = this.props;
		fetchMessages();
	}

	render() {
		const { messages } = this.props;

		if ( messages ) {

			return (
				<div>{JSON.stringify(messages)}</div>
			);
		}

		return null;
	}
}

Test.defaultProps = {
    messages: {},
    fetchMessages: PropTypes.func.isRequired
};

const mapDispatchToProps = ( dispatch ) => ({
	fetchMessages: ( id ) => {
		dispatch( fetchMessages( id ) );
	},
});

const mapStateToProps = ( state ) => ({
	messages: state.messages,
});


export default connect( mapStateToProps, mapDispatchToProps )( Test );
