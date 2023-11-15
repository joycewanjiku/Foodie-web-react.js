// import logo from './logo.svg';
import './App.css';
import Navigationbar from './atoms/Navbar';
import Footer from './atoms/Footer';
import Body from './atoms/Body';
import Menu from './components/Food';
import Manual from './components/All-foods';
import Allmenu from './components/Food-all';


function App() {
  return (
    <div className="App">
        <Navigationbar/>
        <Body/>
        <Menu/>
        <Manual/>
        <Allmenu/>
        <Footer/>
        
    </div>
  );
}

export default App;
