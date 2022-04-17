import {NavBar} from './component/navBar/NavBar'
import { ItemListContainer} from "./component/itemListContainer/ItemListContainer";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at vel mollitia totam, ullam iusto qui tempora quam facere. Neque blanditiis, doloremque soluta libero ab similique quis nisi dolorem ipsum?"/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
