import Header from '../header/Header';
import Article from '../article/Article';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import './App.css';

function App(props) {
  let { title, slogan,  navigation, db, copyringht } = props;
  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation}/>
      <Article db={db}/>
      <Footer copyringht={copyringht}/>

    </div>
  );
};

export default App;
