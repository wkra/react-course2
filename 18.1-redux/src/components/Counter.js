import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter.counter;
    });
    const show = useSelector((state) => {
        return state.counter.show;
    });
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());

    };
    const incHandler = (value = 0) => {
        dispatch(counterActions.inc(value));
    };

    const decHandler = () => {
        dispatch(counterActions.dec());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incHandler.bind(null, 1)}>Increment</button>
                <button onClick={incHandler.bind(null, 5)}>Increment by 5</button>
                <button onClick={decHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
