import "./index.css";
import heroimage from "../../assets/1.jpg"

function Hero (props){
    return(<>
        <div className ={props.cName}>
            <img alt = "heroimage"src={props.heroImg}/>


            <div className = "hero-text">
                <h1>{props.title} </h1>
                <p>{props.text}</p>
                <a href ={props.url} className={props.btnClass}> {props.buttonText}</a>

            </div>


            </div>
      
        </>);
}

export default Hero;