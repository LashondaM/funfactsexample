import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Bananas from './components/Bananas'
import Kiwis from './components/Kiwis'
import Oranges from './components/Oranges'


class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App" >
      <Navbar />
     <Switch>
       <Route path='/Bananas' component={Bananas} />
       <Route path='/Kiwis' component={Kiwis} />
       <Route path='/Oranges' component={Oranges} />
     </Switch>
    </div>
    </BrowserRouter>
    )
  }
}

export default App;
