import React from 'react';

class App extends React.Component {

    componentDidMount(){
        fetch ("http://api.open-notify.org/astros.json")
        .then (json => json.stringify)
    }

  render(){
    return(<li>a thing</li>)
  }

} export default App
