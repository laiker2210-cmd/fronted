/* function Footer() {
    return (
        <footer>
            <p>Copyringht</p>
        </footer>
    )
} */
import React from "react";
class Footer extends React.Component {
    render() {
        return (//значение пиксилей либо в "10px" либо без кавычек просто 10
            <footer style={{background: "lightblue", padding: 10, fontWeight: "bold"}}>
                <p>Copyringht</p>
            </footer>
        )
    };

};

export default Footer;