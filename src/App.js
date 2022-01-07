import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TtSlider from "./Pages/TtSlider/TtSlider";
import { Container } from "@mui/material";
import NewsBlog from "./Pages/NewsBlog/NewsBlog";
import Navigationbar from "./Pages/Navigationbar/Navigationbar";
import TopBanner from "./Pages/TopBanner/TopBanner";
import Product from "./Pages/Product/Product";
import Footer from "./Pages/Footer/Footer";
import AuthProvider from "./Pages/Context/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navigationbar />
              <TopBanner />
              <Home />
              <Container>

                <Product />
              </Container>
              <Container>

                <TtSlider />
              </Container>

              <NewsBlog />
              <Footer />

            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Navigationbar />
              <Container style={{ paddingBottom: '100px', }}>

                <Login />
              </Container>
              <Footer />
            </Route>
            <Route path="/register">
              <Navigationbar />
              <Container style={{ paddingBottom: '200px', }}>

                <Register />
              </Container >
              <Footer />
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
            <Route path='/product'>
              <Container >

                <Product />
              </Container>

            </Route>

            <Route path="*">{/* <NotFound /> */}</Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
