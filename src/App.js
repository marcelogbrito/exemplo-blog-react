import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from './pages/HomePage';
import PaginaSobre from './pages/PaginaSobre'
import PaginaListaArtigos from './pages/PaginaListaArtigos'
import PaginaArtigo from './pages/PaginaArtigo'
import NavBar from './NavBar';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

function App() {
  return (
    <Router>
<div className="App">
  <NavBar />
  <div id="page-body">
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/sobre" component={PaginaSobre} />
      <Route path="/artigos" component={PaginaListaArtigos} />
      <Route path="/artigo/:nome" component={PaginaArtigo} />
      <Route component={PaginaNaoEncontrada} />
      </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
