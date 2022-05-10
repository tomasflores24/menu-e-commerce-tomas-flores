import { Routes, Route } from 'react-router-dom';
import {NavBar} from './component/NavBar/NavBar'
import './App.css';
import { ItemListContainer} from "./pages/itemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./pages/ItemDetailContainer/ItemDetailContainer";
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<h1>Terminaste la compra</h1>}/>

      </Routes>
    </div>
  );
}

export default App;
