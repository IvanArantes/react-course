const app = {
    title: 'Visibility Test'
  };

let visibility = false;


const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

  const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                Hey lazarento.
                </div>
            )}

        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  }

  render();