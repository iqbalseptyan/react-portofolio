import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/404/404";
import Home from "./pages";
import DetailPage from "./pages/detail";

function App() {
  return (
    <Switch>
      <Route exact path="/" basename={process.env.PUBLIC_URL}>
        <Home />
      </Route>
      <Route exact path="/detail">
        <DetailPage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
