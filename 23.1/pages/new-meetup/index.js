import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function NewMeetupPage() {
  const router = useRouter();
  const onAddMeetupHandler = async (data) => {
    await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    router.push('/');
  };
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
        <meta name="description" content="Add you own meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
}