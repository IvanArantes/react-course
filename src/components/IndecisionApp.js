
import React from 'react';
import AddOption from './AddOption'
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  clearSelectedOption = () => {
    this.setState( ({selectedOption: undefined}) );
  }

  deleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    //alert(this.state.options[randNum]);
    this.setState(() => (
        {selectedOption: this.state.options[randNum]})
      );
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== option)
    }));
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
        <OptionModal 
        selectedOption={this.state.selectedOption}
        clearSelectedOption= {this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;