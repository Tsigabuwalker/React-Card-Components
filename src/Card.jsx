import profile1 from './assets/profile.jpg'
import profile2 from './assets/profile2.jpg'
function Card(){
    return(
        <>
        <div className="card">
            <img  className="card-image" src={profile1} alt="profile picture"></img>
             <h2 className="card-title">Walker Coder</h2>
            <p className="card-text">I am Front-End Engineer at Farka ICT</p>
            
        </div>
        <div className="card">
            <img  className="card-image" src={profile2} alt="profile picture"></img>
            <h2 className="card-title">Developer and code Cooker</h2>
            <p className="card-text">I am Back-end Engineer </p>
            
        </div>
        </>
    );
}
export default Card;