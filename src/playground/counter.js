console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  count++;
  renderCounter();
}

const minusOne = () => {
  count--;
  renderCounter();
}

const appRoot = document.getElementById('app');


const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="addButton" onClick={addOne}>+1</button>
      <button id="minusButton" onClick={minusOne}>-1</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounter();