import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/Error';
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction,
} from './pages/EventDetailPage';
import Events, { loader as eventsLoader } from './pages/Events';
import EventsRoot from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/RootLayout';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <HomePage/> },
            {
                path: 'events',
                element: <EventsRoot/>,
                children: [
                    {
                        index: true,
                        element: <Events/>,
                        loader: eventsLoader
                    },
                    {
                        path: ':id',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage/>,
                                action: deleteEventAction
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage/>,
                                action: manipulateEventAction
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEventPage/>,
                        action: manipulateEventAction
                    },
                ]
            },
            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;