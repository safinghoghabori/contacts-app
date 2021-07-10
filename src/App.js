import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddContact from "./pages/AddContact/AddContact";
import HomePage from "./pages/HomePage/HomePage";
import ViewContacts from "./pages/ViewContacts/ViewContacts";

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

          <Route path="/view-contacts">
            <ViewContacts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
