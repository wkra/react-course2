import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const onAddMeetupHandler = (data) => {
    console.log('onAddMeetup', data)
  }
  return (
    <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
  )
}