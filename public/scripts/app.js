"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props)); //props.options is filled in App.defaultProps to get its default value

    _this.state = {
      options: props.options
    }; // Need to bind the context in all Methods

    _this.deleteAllOptions = _this.deleteAllOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    return _this;
  } //lifecycle method


  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {// faz nada
      }
    } //lifecycle method 

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.options.length > 0) {
        localStorage.setItem('options', JSON.stringify(this.state.options));
        console.log('saving data ');
      }
    } //lifecycle method

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWIllUnmount');
    }
  }, {
    key: "deleteAllOptions",
    value: function deleteAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randNum]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (o) {
            return o !== option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      //const title = "First React App";
      var subitle = "React is easier than Angular.";
      return React.createElement("div", null, React.createElement(Header, {
        subitle: subitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        deleteAllOptions: this.deleteAllOptions,
        handleDeleteOption: this.handleDeleteOption
      }), React.createElement(AddOption, {
        options: this.state.options,
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return App;
}(React.Component);

App.defaultProps = {
  options: ['Estudar React', 'Ir a praia']
};

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("h3", null, props.subitle));
};

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.handlePick
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.deleteAllOptions
  }, "Remove All"), React.createElement("ol", null, props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteOption: props.handleDeleteOption
    });
  })));
};

var Option = function Option(props) {
  return React.createElement("div", null, React.createElement("li", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteOption(props.optionText);
    }
  }, "Remove")));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.onSubmit = _this2.onSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.onSubmit
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);
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


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
