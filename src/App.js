import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer  from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App"> 
      <NavBar />      
      Version 1
      <ItemListaContainer />
    </div>
  );
}

export default App;
