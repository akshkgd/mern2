import MeetingCard from "../components/MeetingCard";
function AllMeetingsPage(){
return(
    <div className="container">
    <h1>This is a All Meetings Page</h1>
    <div className="meetings-wrapper">
    <MeetingCard />
    <MeetingCard />
    <MeetingCard />
    <MeetingCard />
    <MeetingCard />
    <MeetingCard />
    </div>
    </div>
)
}
export default AllMeetingsPage;