//function to send information to the app.js file 
function Card(props){
    return(
      <div className="container" style={{backgroundColor: props.bgcolor, width: props.width}}>
            <h1>{props.info}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
      </div>
    )
    }
  
  export default Card;