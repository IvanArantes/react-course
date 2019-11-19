class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Ir a praia", "Estudar React", "Fazer nada 2", "Assistir Naruto"]
    }
    // Need to bind the context in all Methods
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  deleteAllOptions() {
    this.setState(() => {
      return {
        options : []
      }
    });
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options : prevState.options.concat([option])
      }
    });
    
  }

render() {
  const title = "First React App";
  const subitle = "React is easier than Angular.";

  return (
   <div>
    <Header title={title} subitle={subitle}/>
    <Action 
      hasOptions={this.state.options.length > 0}
      handlePick={this.handlePick}
    />
    <Options 
      options={this.state.options}
      deleteAllOptions={this.deleteAllOptions}
    />
    <AddOption 
      options={this.state.options}
      handleAddOption={this.handleAddOption}  
    />
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
        <button 
        disabled={!this.props.hasOptions}
        onClick={this.props.handlePick}
        >What should I do?</button>
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
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error }
    });
    
    
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));