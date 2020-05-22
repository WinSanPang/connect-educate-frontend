import React, { Component } from 'react';
import { connect } from 'react-redux';

import UnassignedMessageListItem from 'components/UnassignedMessages/UnassignedMessageListItem';
import './UnassignedMessageList.scss';
import { fetchUnassignedRequests } from 'actions';

class UnassignedMessageList extends Component {

    componentDidMount() {
        const { fetchUnassignedRequests } = this.props;
        fetchUnassignedRequests();
    }

    renderUnassignedMessageListItems() {
        if(!this.props.unassignedMessagess){
            return; //Add a spinner    
        }
        const test = this.props.unassignedMessagess.map((item) => <UnassignedMessageListItem key={item.id} header={item.id} createdDate={item.created_at} age={item.childs_age} skill={item.skill} language={item.task_language} content={item.content}/>);
        return test;
    }

    render() {
        return (
            <div className='UnassignedMessageList'>
            {this.renderUnassignedMessageListItems()}
            </div>
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