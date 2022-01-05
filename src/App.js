import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TtSlider from "./Pages/TtSlider/TtSlider";
import { Container } from "@mui/material";
import NewsBlog from "./Pages/NewsBlog/NewsBlog";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path='/ttslider'>
            <Container >

              <TtSlider />
            </Container>

          </Route>
          <Route path='/news'>
            <Container >

              <NewsBlog />
            </Container>

          </Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
