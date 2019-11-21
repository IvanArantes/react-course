class App extends React.Component {
  constructor(props) {
    super(props);

    //props.options is filled in App.defaultProps to get its default value
    this.state = {
      options: []
    }
    // Need to bind the context in all Methods
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  //lifecycle method
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // faz nada
    }

  }

  //lifecycle method 
  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length > 0) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
      console.log('saving data ');
    }

  }
  //lifecycle method
  componentWillUnmount() {
    console.log('componentWIllUnmount');
  }

  deleteAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== option)
    }));
  }

  render() {
    //const title = "First React App";
    const subitle = "React is easier than Angular.";

    return (
      <div>
        <Header subitle={subitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          options={this.state.options}
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subitle}</h3>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAllOptions}>Remove All</button>
      <ol>
        {
          props.options.map(option => {
            return <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          })
        }
      </ol>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <li>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >Remove</button>
      </li>

    </div>

  )
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
    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

/* Stateless component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
}
ReactDOM.render(<User name="Ivan" />, document.getElementById('app'));
*/


ReactDOM.render(<App />, document.getElementById('app'));