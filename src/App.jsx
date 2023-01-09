import "./App.scss";
import { About } from "./page/About";
import { Hero } from "./page/Hero";
import { Countdown } from "./page/Countdown";
import { Feature } from "./page/Features";
import { Second } from "./page/Second";
import { TestBottom } from "./page/Testimonial";
import { Buttom } from "./page/Buttom";
import { Footer } from "./page/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Feature />
      <Second />
      <Countdown />
      <TestBottom />
      <Buttom />
      <Footer />
    </div>
  );
}

export default App;
