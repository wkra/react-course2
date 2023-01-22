import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

const NAV = [
    { url: '/events', title: 'All Events', end: true },
    { url: '/events/new', title: 'New Event', end: true }
];

function EventsNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {NAV.map((item) => (
                        <li key={item.url}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) => isActive ? classes.active : undefined}
                                end={item.end}
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

export default EventsNavigation;
