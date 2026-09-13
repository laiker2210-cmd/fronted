import React from "react";

class Range extends React.Component {

    state = { val: "100" }

    range = (event) =>{
        this.setState({val: event.target.value})
    }

    render() {
        return (
            <>
                <input type="range" onInput={this.range} min="0" max="200" step="1"/>
                <p>{this.state.val}</p>
            </>
        )
    }
}
export default Range;