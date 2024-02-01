import "../Destination/index.css"
import heroimage1 from "../../assets/1.jpg"
import heroimage2 from "../../assets/2.jpg"
import heroimage3 from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import heroimage5 from "../../assets/5.jpg"
import six from "../../assets/6.jpg"
import heroimage7 from "../../assets/7.jpg"
import heroimage8 from "../../assets/8.jpg"
import heroimage9 from "../../assets/9.jpg"
import heroimage10 from "../../assets/10.jpg"
import { Component } from "react";


class DestinationData extends Component{
    render(){
        return(

            <div className = {this.props.className}>
            <div className = "des-text">
            <h2>{this.props.heading}</h2>
        <p>
       {this.props.text}
        </p>
        </div>
        <div className = "image">
            <img alt="img" src={this.props.img1}/>
            <img alt="img" src={this.props.img2}/>
        </div>
        </div>
        )
    }
}

export default DestinationData