import './App.css';
import Navbar from './Components/UI/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage/Homepage';
import Roompage from './Components/Pages/Roompage/Roompage';
import Roomprovider from './contextRoom/context';
import Slugroom from './Components/Slugroom/Slugroom';
function App() {
  return (
    <Roomprovider>
    <Navbar />
    <Route exact path='/' component={Homepage} />
    <Route exact path='/rooms' component={Roompage} />
    <Route exact path='/rooms/:sludge' component={Slugroom} />
    </Roomprovider>
  );
}

export default App;
