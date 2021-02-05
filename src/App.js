import { Header } from "./components/Header";
import { Gallery } from "./pages/Gallery";
//import { Login } from "./pages/Login";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Route exact path="/" component={Gallery} />
          {/* <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
