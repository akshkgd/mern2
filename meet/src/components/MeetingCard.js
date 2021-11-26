function MeetingCard(){
    return(
        <div className="meeting-card">
            <img className="meeting-card-image" src="https://source.unsplash.com/1600x900/?nature,food,code" alt=""/>
            <h1>Meeting Card</h1>
            <p>If you'd like to limit the results to only those photos included in our curated collections, simply add featured at the end of the URL.</p>
            <button className="join-btn">Join</button>
        </div>
    );
}
export default MeetingCard;