class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Ir a praia", "Estudar React", "Fazer nada 2", "Assistir Naruto"]
    }
    // Need to bind the context in deleteAllOptions
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
  }

  deleteAllOptions() {
    this.setState(() => {
      return {
        options : []
      }
    });
  }
render() {
  const title = "First React App";
  const subitle = "React is easier than Angular.";

  return (
   <div>
    <Header title={title} subitle={subitle}/>
    <Action hasOptions={this.state.options.length > 0}/>
    <Options 
      options={this.state.options}
      deleteAllOptions={this.deleteAllOptions}
    />
    <AddOption/>
   </div>
  );
}


}

class Header extends React.Component {

  render(){
    return (
      <div>
        <h1>This is {this.props.title}.</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    ) 
  }
}

class Options extends React.Component {
  render() {
 
    return (
      <div>
      <button onClick={this.props.deleteAllOptions}>Remove All</button>
        <ol>
          {this.props.options.map(element => {
            return <Option key={element} optionText={element}/>
          })}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
     <li>{this.props.optionText}</li>
    )
  }
}


class AddOption extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if(option) {
      alert(option);
    }
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));