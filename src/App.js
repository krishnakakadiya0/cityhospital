import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import {Switch, Route } from 'react-router-dom';
import Departments from "./containers/Departments/Departments";
import Doctors from "./containers/Doctors/Doctors";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Authentication from "./containers/Authentication/Authentication";

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/departments'} component={Departments}/>
          <Route exact path={'/doctors'} component={Doctors}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/contact'} component={Contact}/>
          <Route exact path={'/authentication'} component={Authentication}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
