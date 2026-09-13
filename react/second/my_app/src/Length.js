import React from "react";

class Length extends React.Component {
    //вариант 1   
    /* constructor(props) {
        super(props);
        this.state = {
            length: 10
        }
    } */

    //вариант 2   
    state = { length: 10 }

    add = () => {
        this.setState({ length: this.state.length + 3 })
    }

    reset = () => {
        this.setState({ length: 10 })
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>Add length</button>
                <button onClick={this.reset}>Reset</button>
                <div><input size={this.state.length} /></div>
            </div>
        )
    }
}

export default Length;