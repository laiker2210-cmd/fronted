import React from "react";

class User extends React.Component {

    componentWillUnmount(){
        alert("Пользователь удален")
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Name: Petr</li>
                    <li>Email: petr@mail.ru</li>
                    <li>Cotact: +7 800-2000-600</li>
                </ul>
            </div>
        )
    }
}

export default User;