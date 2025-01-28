import profile from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profile} alt="profile picture"></img>
            <h2>Walker Coder</h2>
            <p>I am Front-End Engineer at Farka ICT</p>
        </div>
    );
}
export default Card;