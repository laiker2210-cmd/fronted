import logo from './headerImg.jpeg';
import './Hero.css';

function Hero() {
    return (
        <header className="App-header container">

            <img src={logo} className="App-logo" alt="logo" />
            <h1>Мастерская Тайга: <br />ножи ручной работы</h1>


        </header>
    )
}

export default Hero;