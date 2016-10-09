import React from 'react'
import ReactDOM from 'react-dom'


//
// App's top-level component
//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // App state properties go here
    }
  }

  render() {
    return (
      <div>
        My App
      </div>
    );
  }
}


//
// Render top-level App component into DOM
//
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
