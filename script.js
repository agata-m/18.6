var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('ustawienie domyślne wartości propsów (te, które nie zostały przekazane do komponentu');
    },
    
    getInitialState: function() {
        console.log('ustawienie początkowego stanu komponentu, np. zero w tym liczniku');
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('przygotowanie do zwrócenia komponentu przez render');
    },

    componentDidMount: function() {
        console.log('wykonywanie operacji na komponencie zamontowanym na stronie, np. pobieranie danych')
    },
    
    componentWillReceiveProps: function() {
        console.log('aktualizowanie właściwości elementu')
    },

    shouldComponentUpdate: function() {
        console.log('sprawdza, czy komponent trzeba przerysować, można jej używać do optymalizaji działania aplikacji');
        return true;
    },

    componentWillUpdate: function() {
        console.log('przygotowanie do nadchodzących zmian')
    },
    
    componentDidUpdate: function() {
        console.log('podobna do componentDidMount, wykonywanie operacji na komponencie zamontowanym na stronie, np. pobieranie danych')
    },
    
    componentWillUnmount: function() {
        console.log('przygotowanie do usunięcia komponentu, np. odpinanie timerów albo nasłuchiwania zdarzeń')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log('zwraca ReactElement');
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik'),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            this.state.counter
        );
    }

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));