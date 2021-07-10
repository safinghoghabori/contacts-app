import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to='/'>
              <HomePage />
            </Route>  
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
