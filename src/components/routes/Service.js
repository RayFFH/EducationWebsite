import heroimage1 from "../../assets/1.jpg"
import heroimage2 from "../../assets/2.jpg"
import heroimage3 from "../../assets/3.jpg"
import heroimage4 from "../../assets/4.jpg"
import heroimage5 from "../../assets/5.jpg"
import heroimage6 from "../../assets/6.jpg"
import heroimage7 from "../../assets/7.jpg"
import heroimage8 from "../../assets/8.jpg"
import heroimage9 from "../../assets/9.jpg"
import heroimage10 from "../../assets/10.jpg"
import heroimage11 from "../../assets/11.jpg"
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../footer";
import Trip from "../Trip"

function Service (){
    return(
        <>
        <Navbar />
        <Hero
        cName ="hero-mid"
        heroImg={heroimage11}
        title = "Service"
        btnClass="hide"
        //style={{ width: '1980px' , height: '1080px' }} // Set the desired width and height

        />
        <Trip/>
         <Footer/>
        </>

    )
}

export default Service;