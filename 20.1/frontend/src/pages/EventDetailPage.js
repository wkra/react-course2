import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event}/>;
}

export async function loader({ params }) {
    const response = await fetch('http://localhost:8080/events/' + params.id);

    if (!response.ok) {
        throw json({
            message: 'Could not fetch details event',
            status: 500
        });
    } else {
        return response;
    }

}

export async function action({ params, request }) {
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: request.method
    });

    if (!response.ok) {
        throw json({
            message: 'Could not delete event',
            status: 500
        });
    }
    return redirect('/events');
}