import Form from './components/Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Showcase from './components/Showcase'
import Admin from './pages/admin'
import BookingSteps from './components/BookingSteps';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Showcase />
          <div className="scetion-b">
                    <div className="form-up">
            <Form />
            <div className="container ">
                <BookingSteps/>
          </div>
          </div>
  </div>
          </Route>
        <Route path="/admin">
          <Admin />
          </Route>
        </Switch>
   </Router>
  );
}




export default App;
