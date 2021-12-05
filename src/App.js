import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/detalle/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    
    <BrowserRouter value={{}}>
      <NavBar />
      <Routes>
        <Route  path="/" element={<ItemListContainer />} />
        <Route  path="categoria/:catIdParams" element={<ItemListContainer />} />
        <Route  path="item/:itemIdParams" element={<ItemDetailContainer />} />
        <Route  path="/Cart" element={<ItemDetailContainer />} />
      </Routes>
      
    </BrowserRouter>
 

  );
}

export default App ;
