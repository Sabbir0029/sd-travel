import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/Home'>
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
