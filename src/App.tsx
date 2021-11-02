import "./App.css";
import { ReactElement } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = (): ReactElement => {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Router>
    </Layout>
  );
};

export default App;
