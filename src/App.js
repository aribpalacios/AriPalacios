import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/detalle/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* 
      <ItemListContainer /> */}
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
        <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
