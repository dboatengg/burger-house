import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Events from "./components/Events";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Products />
      <Events />
    </div>
  );
}

export default App;
