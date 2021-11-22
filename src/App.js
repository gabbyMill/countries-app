import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import DropDown from "./Components/DropDown";

function App() {
  return (
    <div className="App">
      <h1 className="title">Hello World</h1>
      <SearchBar />
      <DropDown />
    </div>
  );
}

export default App;
