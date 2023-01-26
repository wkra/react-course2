import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import { mongoUrl } from '../../config';
import Head from 'next/head';

export default function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta
          name="description"
          content={props.meetup.description} />
      </Head>
      <MeetupDetail
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  await client.close();

  return {
    // fallback: false - support only written paths, any other page will give 404
    // fallback: true - generate static for written paths, but also
    //      try to fetch data for current path which is not included
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const objId = new ObjectId(meetupId);
  const meetup = await meetupsCollection.findOne({ _id: objId });
  await client.close();

  return {
    props: {
      meetup: {
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString()
      }
    }
  };
}