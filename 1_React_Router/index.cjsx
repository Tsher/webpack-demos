React= require 'react'
render= require('react-dom').render
Router= require('react-router').Router
Route= require('react-router').Route
Link= require('react-router').Link
IndexRoute= require('react-router').IndexRoute
createBrowserHistory= require('history/lib/createBrowserHistory')

require './app.styl'

App= React.createClass
	render: ->
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          <Link to="/usr">Logged in as Jane</Link>
        </header>
        {this.props.children}
      </div>

Dashboard= React.createClass
	render: ->
      <div>
        <p>Dashboard</p>
      </div>

Inbox= React.createClass
  render: ->
      <div>
        <p>Inbox</p>
      </div>

Calendar= React.createClass
	render: ->
      <div>
        <p>Calendar</p>
      </div>

Usr= React.createClass
	render: ->
      <div>
        <p>User</p>
      </div>

history = createBrowserHistory()

render (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Inbox}/>
      <Route path="app" component={Dashboard}/>
      <Route path="inbox" component={Inbox}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="user" component={Usr}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.body
