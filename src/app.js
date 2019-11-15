console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  console.log('form submitted', e);
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
}

const removeAll = () => {
  app.options = [];
  renderOptions();
};

const onMakeDecision = () => {
  const randNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNumber];
  alert(option);
};


const renderOptions = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
      {
        app.options.map((option) =>  <li key={option}>{option}</li>)
      }
      </ol>
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button type="submit">Add Option</button>
      </form>
  
    </div>
  );
  
  ReactDOM.render(template, appRoot);
  }


const appRoot = document.getElementById('app');
renderOptions();



