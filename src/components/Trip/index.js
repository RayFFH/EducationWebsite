import "./index.css"
import TripData from "../TripData"
import Trip1 from "../../assets/1.jpg"
import Trip2 from "../../assets/2.jpg"
import Trip3 from "../../assets/3.jpg"
import Trip4 from "../../assets/4.jpg"
import Trip5 from "../../assets/5.jpg"
import Trip6 from "../../assets/6.jpg"
import Trip7 from "../../assets/7.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Learning Events</h1>
            <p>You can discover new learning events here</p>
            <div className = "tripcard">
                <TripData
                image={Trip3}
                heading= "Learning under pressure"
                text = "Navigating the realm of learning under pressure presents a unique challenge, demanding resilience and adaptability. In these situations, individuals are often compelled to swiftly absorb and apply information, making the most of limited time constraints. The intensity of such environments can foster a heightened focus, pushing learners to tap into their problem-solving abilities and prioritize key concepts"
                />
                <TripData
                image={Trip5}
                heading= "Indepedent Learning"
                text = "Independent learning stands as a cornerstone of self-directed education, empowering individuals to take control of their own learning journey. In this mode, learners autonomously explore topics of interest, set their pace, and determine the depth of their understanding. Emphasizing self-motivation and resourcefulness, independent learning allows individuals to tailor their educational experience to match their unique preferences and goals."
                />
                <TripData
                image={Trip7}
                heading= "Parallel Learning"
                text = "Engaging in parallel learning, where multiple subjects or skills are pursued simultaneously, fosters a dynamic and interconnected approach to education. This method encourages learners to draw connections between seemingly disparate areas of knowledge, promoting a holistic understanding."
                />
            </div>
        </div>
    );
}

export default Trip;