import {NavBar} from './component/NavBar/NavBar'
import { ItemListContainer} from "./component/itemListContainer/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at vel mollitia totam, ullam iusto qui tempora quam facere. Neque blanditiis, doloremque soluta libero ab similique quis nisi dolorem ipsum?"/>

    </div>
  );
}

export default App;
