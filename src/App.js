import { Navbar, About, Footer, Header, Projects, Skills } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      {/* <Skills />
      <Projects />
      <Comments />
      <Footer /> */}
    </div>
  );
}

export default App;
