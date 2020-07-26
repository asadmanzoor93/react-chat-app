import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageListing from "./MessageListing";
import CreateMessage from "./CreateMessage";

class ChatDashboard extends Component {
    createMessage = (message) => {
        let message_item = {
            'username': this.props.user.username,
            'text': message
        };
        this.props.updateMessages(message_item);
    };

    render() {
        const { messages, user } = this.props;

        return (
            <div className="chat-window">
                <h2>React Chat APP</h2>
                <div className="name sender">{user.username}</div>
                <MessageListing messages={messages} user={user} />
                <CreateMessage messages={messages} createMessage={this.createMessage} />
            </div>
        );
    }
}

ChatDashboard.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    updateMessages: PropTypes.func.isRequired,
};

export default ChatDashboard;
