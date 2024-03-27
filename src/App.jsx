import {
  Contact,
  Navbar,
  About,
  Footer,
  Header,
  Projects,
  Services,
  ProjectDetail,
} from "./components";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-grid">
        <div className="sidebar">
          <Navbar />
        </div>
        <div>
          <Header />
          <About />
          <Services />
          <Projects />
          <ProjectDetail />
          <Contact />
          <Footer />
          <ScrollToTop
            smooth
            component={
              <div className="scroll-top">
                <FaArrowUp />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
