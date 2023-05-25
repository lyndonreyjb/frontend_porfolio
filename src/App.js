import { Navbar, About, Footer, Header, Projects, Skills } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
