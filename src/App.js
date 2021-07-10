import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddContact from "./pages/AddContact/AddContact";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/add-contact">
            <AddContact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
