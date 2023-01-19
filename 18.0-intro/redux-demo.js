const redux = require('redux');

const counterReducer = (state , action) => {
    if (action.type === 'INC') {
        return {
            counter: state.counter + action.value
        };
    }

    if (action.type === 'DEC') {
        return {
            counter: state.counter - action.value
        };
    }

    return {
        counter: 0
    };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();

    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INC', value: 2 });
store.dispatch({ type: 'DEC', value: 1 });
