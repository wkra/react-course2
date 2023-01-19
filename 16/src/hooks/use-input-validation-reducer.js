import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            ...state,
            value: action.value
        };
    }
    if (action.type === 'BLUR') {
        return {
            ...state,
            isTouched: true
        };
    }
    if (action.type === 'RESET') {
        return {
            value: '',
            isTouched: false
        };
    }

    return initialInputState;
};

const useInputValidationReducer = (validation) => {
    console.log('USE REDUCER')
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const isValid = validation(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    const onBlur = () => {
        dispatch({
            type: 'BLUR'
        });
    };

    const onChangeHandler = (e) => {
        dispatch({
            type: 'INPUT',
            value: e.target.value
        });
    };

    const reset = () => {
        dispatch({
            type: 'RESET'
        });
    };

    return {
        value: inputState.value,
        isValid,
        hasError,
        reset,
        onBlur,
        onChangeHandler
    };
};

export default useInputValidationReducer;