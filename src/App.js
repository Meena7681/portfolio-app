import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/publicRouter/Routers";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routers />
        main Page
      </main>
      <Footer />
    </Router>
  );
}

export default App;
