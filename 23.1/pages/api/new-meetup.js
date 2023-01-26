import { MongoClient } from 'mongodb';
import { mongoUrl } from '../../config';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(mongoUrl);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    await meetupsCollection.insertOne(data);

    await client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;