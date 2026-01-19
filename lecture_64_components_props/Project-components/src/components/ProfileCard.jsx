function Card(props) {
    return ( 
        <>
        <div className="profile-card">
      <img src={props.image} alt="profile" className="profile-img" />
      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>
      <p className="email">{props.email}</p>
      <div className="social">
        <a href={props.linkedin} target="_blank">LinkedIn</a>
        <a href={props.github} target="_blank">GitHub</a>
      </div>
    </div>

        </>
        
     );
}

export default Card;