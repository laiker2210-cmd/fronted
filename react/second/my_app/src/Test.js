import React from "react";

class Test extends React.Component {

    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            sl: 0
        }
    }

    buttonHandle = () => {
        //console.log("Method work");
        let val = this.state.sl;
        val++;
        this.setState({ sl: val })
    }

    componentDidMount(){
        console.log("component Did Mount");
    }

    componentDidUpdate(){
        console.log("component Did Update");
    }

    render() {
        console.log("Render 1");
        return (
            <>
                {
                    console.log("Return 1")
                }
                <div>
                    <button onClick={this.buttonHandle}>Push</button>
                </div>
                <div>
                    {
                        this.setState.sl
                    }
                </div>
            </>
        )
    }
}

export default Test;