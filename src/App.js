import {Wish} from './components/Wish';
import {Homepage} from './components/Homepage'
import {Resources} from './components/Resources';
import {Activities} from './components/Activities';
import {Quiz} from './components/Quiz';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path = "/">
            <Homepage />
          </Route>
          <Route path = "/wish">
            <Wish />
          </Route>
          <Route path = "/activities">
            <Activities/>
          </Route>
          <Route path = "/resources">
            <Resources/>
          </Route>
          <Route path = "/quiz">
            <Quiz/>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
