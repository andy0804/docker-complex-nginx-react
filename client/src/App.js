import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Fib Multi Container Application</header>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
