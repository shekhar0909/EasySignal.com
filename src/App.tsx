import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";
import "./index.css";
import { MainSection } from "./components/MainSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Header />
      <MainSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
