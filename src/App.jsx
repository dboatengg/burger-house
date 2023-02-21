import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Events from "./components/Events";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Products />
      <Events />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
