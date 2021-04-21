import logo from './dog.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registrar from './Registrar'
import WelcomeScreen from './WelcomeScreen';
import { fakeFetchData } from './DataFetcher'

function App() {
  fakeFetchData()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>

        <div id="app-content-view" className="App-content-view">
            <Router>
                <Switch>
                    <Route exact path="/" component={WelcomeScreen}/>
                    <Route exact path="/Registrar" component={Registrar}/>
                </Switch>
            </Router>
          </div>
          

      </body>

    </div>
  );
}

export default App;
