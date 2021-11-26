import MeetingCard from "../components/MeetingCard";
function MyMeetingsPage(){
    return(
    <div className="container">
    <h1>My Meetings</h1>
    <div className="meetings-wrapper">
    <MeetingCard />
    <MeetingCard />
    </div>
    </div>
    )
    }
    export default MyMeetingsPage;