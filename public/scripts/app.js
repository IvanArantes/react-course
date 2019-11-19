"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    };
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
    key: "render",
    value: function render() {
      var title = "First React App";
      var subitle = "React is easier than Angular.";
      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subitle: subitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0
      }), React.createElement(Options, {
        options: this.state.options,
        deleteAllOptions: this.deleteAllOptions
      }), React.createElement(AddOption, null));
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
        disabled: !this.props.hasOptions
      }, "What should I do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    var _this2;

    _classCallCheck(this, Options);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props)); //Feito para que seja inferido o contexto dentro do método removeAll.

    _this2.removeAll = _this2.removeAll.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Options, [{
    key: "removeAll",
    value: function removeAll() {
      alert('removed');
      this.props.options = [];
      render();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.removeAll
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

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOption).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      if (option) {
        alert(option);
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
