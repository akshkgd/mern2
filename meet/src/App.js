import './App.css';
import {Route, Switch} from 'react-router-dom';
import AllMeetingsPage from './pages/AllMeetings';
import AddMeetingsPage from './pages/AddMeetings';
import MyMeetingsPage from './pages/MyMeetings';
import Navigation from './components/Navigation';
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
     <Route exact path="/" component={AllMeetingsPage}/>
     <Route exact path="/add-meetings" component={AddMeetingsPage}/>
     <Route exact path="/my-meetings" component={MyMeetingsPage}/>
     </Switch>
    </div>
  );
}

export default App;

