import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const NAV = [
    { url: '/', title: 'Home', end: true },
    { url: '/events', title: 'Events' }
];

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {NAV.map((item) => (
                        <li key={item.url}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) => isActive ? classes.active : undefined}
                                >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
