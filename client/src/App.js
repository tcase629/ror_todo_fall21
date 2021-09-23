import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Todos from './components/todos/Todos';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todos" component={Todos} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;