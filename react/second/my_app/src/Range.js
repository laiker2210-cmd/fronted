import React from "react";

class Range extends React.Component {

    state = { val: "100" }

    range = (event) => {
        this.setState({ val: event.target.value })
    }

    render() {
        const squareStyle = {
            width: `${this.state.val}px`,
            height: `${this.state.val}px`,
            backgroundColor: "#00ff41",
            marginTop: "20px",
            transition: "width 0.1s, height 0.1s"
        };

        return (
            <>
                {/* <input type="range" onInput={this.range} min="0" max="200" step="1" /> */}
                <p>Выберите размер квадрата:</p>
                <input
                    type="range"
                    min="0"
                    max="200"
                    step="1"
                    value={this.state.val}
                    onChange={this.range}
                />
                <p>{this.state.val}px * {this.state.val}px</p>

                <div style={squareStyle}></div>
            </>
        )
    }
}
export default Range;