import four from "../../assets/4.jpg"
import six from "../../assets/6.jpg"
//import eight from "../../assets/8.jpg"
import nine from "../../assets/9.jpg"

import eight from "../../assets/8.jpg"
import DestinationData from "../DestinationData";
import "./index.css"
const Destination = () =>{
    return(
        <div className="destination">
          <h1>Learning plans</h1>
          <p>These learning plans give students the opportunity to grow</p>  

        <DestinationData
        className="first-des"
        heading= "Personalized Learning Journey for Educational Enrichment"
        text = "Embark on a journey of academic discovery as students delve into fundamental subjects such as mathematics, language arts, and science. The emphasis is on establishing a robust foundation through interactive and engaging activities that develop crucial skills in reading, writing, and problem-solving. By incorporating creative approaches, we aim to instill a genuine love for learning, making education both enjoyable and meaningful for school success."
        img1={four}
        img2= {six}
        />
        <DestinationData
        className="first-des-reverse"
        heading = "Exploring the Wonders of Learning through Creative Exploration"
        text = "Embark on an adventure of intellectual exploration as students immerse themselves in a variety of subjects, including literature, mathematics, and science. The focus is on cultivating a strong foundation through dynamic and interactive activities designed to enhance essential skills in problem-solving, reading, and writing. By integrating imaginative methods, our goal is to foster an authentic passion for learning, ensuring that education is not only enjoyable but also deeply meaningful for achieving academic success."
        img1={nine}
        img2= {eight}
        />
        </div>

    );

};

export default Destination;