import logo from './headerImg.jpeg';
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Мастерская Тайга: <br/>ножи ручной работы</h1>
        </header>
    )
}

export default Header;