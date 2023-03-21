import './App.css';

import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <nav className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </nav>
  );
}

export default App;
