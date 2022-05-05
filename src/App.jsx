import { Routes, Route } from 'react-router-dom';
import {NavBar} from './component/NavBar/NavBar'
import './App.css';
import { ItemListContainer} from "./pages/itemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./pages/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App;