import "./App.css";
import { Route, Router } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/home">{/* <Home /> */}</Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
