import {NavBar} from './component/NavBar/NavBar'
import { ItemListContainer} from "./component/itemListContainer/ItemListContainer";

import {ItemDetailContainer} from "./component/ItemDetailContainer/ItemDetailContainer"
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}

      <ItemDetailContainer />
    </div>
  );
}

export default App;

/*
Investigar sobre "FLEXBOX"

*/