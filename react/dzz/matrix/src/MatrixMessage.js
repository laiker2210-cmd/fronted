import React from 'react';
import './MatrixMessage.css';

class MatrixMessage extends React.Component {
    constructor(props) {
        super(props);

        this.charIndex = 0;

        this.state = {
            text: '',
        };

        this.typeTimer = null;
        this.hideTimer = null;
    }

    componentDidMount() {
        this.hideTimer = setTimeout(() => {
            if (this.props.onHide) {
                this.props.onHide();
            }
        }, 2000);

        this.typeTimer = setInterval(() => {
            this.charIndex += 1;

            this.setState({
                text: this.props.text.slice(0, this.charIndex),
            });

            if (this.charIndex >= this.props.text.length) {
                clearInterval(this.typeTimer);
            }
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.typeTimer);
        clearTimeout(this.hideTimer);
    }

    render() {
        return (
            <span className="matrix-text">
                {this.state.text}
            </span>
        );
    }
}

export default MatrixMessage;