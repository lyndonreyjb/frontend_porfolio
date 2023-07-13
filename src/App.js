import {
  Contact,
  Navbar,
  About,
  Footer,
  Header,
  Projects,
  Skills,
  Services,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-grid">
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
          <About />
          <Services />
          {/* <Skills /> */}
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
