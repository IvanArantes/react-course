"use strict";

console.log('App.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('form submitted', e);
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderOptions();
};

var onMakeDecision = function onMakeDecision() {
  var randNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNumber];
  alert(option);
};

var renderOptions = function renderOptions() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), React.createElement("button", {
    onClick: onMakeDecision,
    disabled: app.options.length === 0
  }, "What should I do?"), React.createElement("button", {
    onClick: removeAll
  }, "Remove all"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", {
    type: "submit"
  }, "Add Option")));
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderOptions();
