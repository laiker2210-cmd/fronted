/* function Footer() {
    return (
        <footer>
            <p>Copyringht</p>
        </footer>
    )
} */
import React from "react";
class Footer extends React.Component {
    /* вариант 2 
    constructor(props){
        super(props)
    } */
    
    render() {
        let {copyringht} = this.props
        return (//значение пиксилей либо в "10px" либо без кавычек просто 10
            <footer style={{background: "lightblue", padding: 10, fontWeight: "bold"}}>
                {/*вариант 1  <p>{this.props.text}</p> */} 
                <p>{copyringht}</p>{/* вариант 3*/}
            </footer>
        )
    };

};

export default Footer;