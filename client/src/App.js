import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Archive from './components/archive/Archive';
import Footer from './components/footer/Footer';
import Backend from './components/backend/Backend';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/archive">
            <Archive />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route exact path="/backend">
            <Backend />
          </Route> */}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
