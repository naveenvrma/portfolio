import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import PageContent from './components/pageContent/PageContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Project from './components/project/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/project" component={Project}></Route>
        </Switch>
      </div>
    
    </Router>
    
  );
}

export default App;
