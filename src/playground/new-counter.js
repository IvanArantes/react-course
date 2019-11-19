class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addCounter = this.addCounter.bind(this);
        this.minusCounter = this.minusCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);

        //Define o estado padrão do componente.
        this.state = {
            count: 0,
            title: 'Ivan App'
        }
    }

    /*Quando utilizei setState o valor foi alterado na tela sem 
    precisar renderizar manualmente. Só altera os atributos 
    que passei no retorno */
    addCounter() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    minusCounter() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    resetCounter() {
        this.setState(() => {
            return {
                count : 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addCounter}>+1</button>
                <button onClick={this.minusCounter}>-1</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));