import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import React, { useState, useRef } from "react";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        // console.log(nameInputRef.current.value)
        // console.log(ageInputRef.current.value)
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age'
            });
            return;
        }

        props.onAddUser({ username, age, id: Math.random().toString() });
        clearInputs();
    };
    const usernameChangeHAndler = (e) => {
        setUsername(e.target.value);
    };

    const ageChangeHAndler = (e) => {
        setAge(e.target.value);
    };

    const clearInputs = () => {
        setUsername('');
        setAge('');
    };

    const errorCloseHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onClose={errorCloseHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"
                           type="text"
                           value={username}
                           onChange={usernameChangeHAndler}
                           ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age"
                           type="number"
                           value={age}
                           onChange={ageChangeHAndler}
                           ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;