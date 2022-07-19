import {
  BrowserRouter as Router,
   Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
function App(){
   
    return (
    <Router>
      <div className="App">
      <Route exact path='/' element={< Home />}></Route>
<Route exact path='/about' element={< About />}></Route>
   </div>
     </Router>
  );
  }
  export default App;
