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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      options: ["Ir a praia", "Estudar React", "Fazer nada 2", "Assistir Naruto"]
    }; // Need to bind the context in all Methods

    _this.deleteAllOptions = _this.deleteAllOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
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
    key: "render",
    value: function render() {
      var title = "First React App";
      var subitle = "React is easier than Angular.";
      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subitle: subitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        deleteAllOptions: this.deleteAllOptions
      }), React.createElement(AddOption, {
        options: this.state.options
      }));
    }
  }]);

  return App;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "This is ", this.props.title, "."), React.createElement("h3", null, this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        disabled: !this.props.hasOptions,
        onClick: this.props.handlePick
      }, "What should I do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.props.deleteAllOptions
      }, "Remove All"), React.createElement("ol", null, this.props.options.map(function (element) {
        return React.createElement(Option, {
          key: element,
          optionText: element
        });
      })));
    }
  }]);

  return Options;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("li", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.onSubmit = _this2.onSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      if (option) {
        this.props.options.push(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: this.onSubmit
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
