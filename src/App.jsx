import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <header>
        <nav className="flex gap-8 justify-center bg-blue-500 text-white p-4">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/login">Login</Link>
          <Link to="/users">Users</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <div className="p-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
