import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Login from './components/Login/login';
import {Register} from './components/Register/Register';
// import Card from './components/Card/Card';
import CardNew from './components/Card/Card_New';
import FormPatient from './components/Form/Form';


function App() {
  return (
    <div className="App">                                         
      <div>
        <Switch>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/card' component={CardNew}></Route>
        <Route exact path='/patient' component={FormPatient}></Route>
        </Switch>     
      </div>
      {/* <FormPatient/> */}
    </div>
  );
}

export default App;
