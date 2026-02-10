import Header from "../components/Header"
import HeroSection from "../components/Homesections/Heroslider"
import AboutSection from "../components/Homesections/aboutsection"
import AboutDoctor from "../components/Homesections/aboutdoctor"
import AreasOfExpertise from "../components/Homesections/areaofexperties"
import CDATASection from "../components/Homesections/cta"
import Slider from "../components/Homesections/slider"
import ObsGynae from "../components/Homesections/ObsGynae"

const Home = ()=>{
    return(
        <>
        {<Header/>}    
        {<Slider/>}   
        {<HeroSection/>}
        {<AboutSection/>}
        {<AboutDoctor/>}
        {<AreasOfExpertise/>}
        {<CDATASection/>}
        {<ObsGynae/>}
        </>
    )
}

export default Home;