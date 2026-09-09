import Header from '../header/Header';
import Article from '../article/Article';
import Footer from '../footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header let title = "My site" slogan = "I am learning React"/>
      <Article />
      <Footer />

    </div>
  );
};

export default App;
