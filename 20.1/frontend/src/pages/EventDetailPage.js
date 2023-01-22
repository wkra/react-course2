import { json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event}/>;
}

export async function loader({  params }) {
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