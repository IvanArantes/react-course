class App extends React.Component {
render() {
  return (
   <div>
   <Header/>
   <Action/>
   <Options/>
   <AddOption/>
   </div>
  );
}


}

class Header extends React.Component {

  render(){
    return (
      <p>This is header.</p>
    ) 
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
      Options:
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option1
      </div>
    )
  }
}


class AddOption extends React.Component {
  render() {
    return (
      <div>
      AddOption
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));