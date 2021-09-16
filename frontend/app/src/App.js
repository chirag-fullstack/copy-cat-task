import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import InputPage from './components/InputPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' component={InputPage} exact/>
      <Route path='/result' component={ResultPage} exact/>
    </Switch>
    </Router>
  );
}

export default App;
