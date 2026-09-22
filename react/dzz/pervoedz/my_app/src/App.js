import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Catalog from './components/catalog/Catalog';
import { NavLinks } from './data/NavLinks';
import { knives } from './data/knives';
import './App.css';

function App() {
    return (
        <>
            <Nav links={NavLinks} />
            <main>
                <Hero />
                <Catalog knives={knives} />
            </main>
        </>
    );
}

export default App;
