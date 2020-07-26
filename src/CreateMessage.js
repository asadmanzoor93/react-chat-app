import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CreateMessage extends Component {
    state = {
        message: '',
    };

    isDisabled = () => {
        return this.state.message === '';
    };

    handleInputChange = (event) => {
        let value = event.target.value;
        this.setState({
            message: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage(this.state.message);
    };

    render() {

        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input type="text"
                           className="form-control"
                           onChange={this.handleInputChange}
                           value={this.state.message}
                           placeholder="Enter your message..."
                    />
                    <div className="input-group-append">
                        <button
                            className="btn submit-button"
                            disabled={this.isDisabled()}
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

CreateMessage.propTypes = {
    createMessage: PropTypes.func.isRequired,
};

export default CreateMessage;
