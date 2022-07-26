import Navbar from "./Components/Navbar/Navbar";
import Link from "./Components/Link/Link";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Projects from "./Pages/Projects/Projects";
import NotFound from "./Pages/NotFound/NotFound";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed-container">
          <Navbar />
          <Link />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/project">
              <Projects />
            </Route>
            <Route path="/detail/:id">
              <ProjectDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
