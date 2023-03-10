import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log('componentDidUpdate');
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    componentDidMount() {
        this.setState({
            filteredUsers: this.context.users
        });
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                {/*<UsersContext.Consumer></UsersContext.Consumer>*/}
                <div className={classes.finder}>
                    <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers}/>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <Fragment>
//             <input type="search" onChange={searchChangeHandler}/>
//             <Users users={filteredUsers}/>
//         </Fragment>
//     );
// };

export default UserFinder;