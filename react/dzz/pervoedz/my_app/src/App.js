import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './App.css';

function App(props) {

let {navigation} = props;

  return (
    <div className='container'>
      <Nav navigation={navigation}/>
      <Header/>
      
    </div>
  );
}

export default App;
