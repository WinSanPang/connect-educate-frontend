import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from 'hoc/Aux';
import UnassignedMessageListItem from 'components/UnassignedMessages/UnassignedMessageListItem';
import './UnassignedMessageList.css';
import { fetchUnassignedRequests } from 'actions';

class UnassignedMessageList extends Component {

    componentDidMount() {
        const { fetchUnassignedRequests } = this.props;
        fetchUnassignedRequests();
    }

    renderUnassignedMessageListItems() {
        const { unassignedMessages } = this.props;
        const elements = Object.entries( unassignedMessages ).map( item =>  <UnassignedMessageListItem key={item.id}/>);

        return elements;
    }

    render() {

        console.log('dog?', this.props.unassignedMessagess);
        /* const test = this.props.unassignedMessagess.map(test => (
            <div>{test.id}</div>
        )) */


        return (
          <Aux>
            { this.renderUnassignedMessageListItems() }
        </Aux>
        )
    }
}

const mapStateToProps = (state) => ({
    unassignedMessagess: state.unassignedRequests
});

const mapDispatchToProps = ( dispatch ) => ({
	fetchUnassignedRequests: () => {
		dispatch(fetchUnassignedRequests());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(UnassignedMessageList);