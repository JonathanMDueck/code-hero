import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

import './styles/global.scss'


function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/details/:id' component={Details}></Route>
    </BrowserRouter>
  );
}

export default App;
