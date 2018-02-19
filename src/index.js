import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/home/home'
import Episodes from './containers/episodes/episode'
import Parts from './containers/part/part'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => (
	<Provider store={store}>
	  <Router>
	    <Switch>
	      <Route exact path="/" component={Home}/>
	      <Route exact path="/courses/:id/episodes" component={Episodes}/>
	      <Route exact path="/courses/:id/episodes/:episode_id" component={Parts}/>
	    </Switch>
	  </Router>
	 </Provider>
)



ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
