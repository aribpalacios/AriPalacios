import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer  from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App"> 
      <NavBar />      
      
      <ItemListContainer greeting="Hola soy greeting" />
    </div>
  );
}

export default App;
