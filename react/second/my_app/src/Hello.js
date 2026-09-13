// метод setState()
import React from "react";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        //присвается объект с ключами и значениями
        this.state = { text: "Hello" }
    }

    changeText = () => {
        this.setState({ text: !this.state.text})
    }

    /* resetText = () => {
        this.setState({ text: "Hello" })
    } */

    render() {
        return (
            <div>
                {/* <button onClick={this.changeText}>Заменить</button>
                <button onClick={this.resetText}>Сбросить</button>
                <p>{this.state.text}</p> */}
                <button onClick={this.changeText}>Сбросить</button>
                <p>{this.state.text ? "Привет" : "Hello"}</p>
            </div>
        )
    }
}

export default Hello;