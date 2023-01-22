import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import configContext from '../store/context/config/config-context';

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const config = useContext(configContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${config.apiUrl}events`);
            const data = await response.json();
            setEvents(data.events);

        };

        fetchData().catch(console.error);
    }, []);
    return (
        <>
            <h1>Events Page</h1>

            <ul>
                {events.map((event) => (
                    <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>
                ))}
            </ul>
        </>
    );
}