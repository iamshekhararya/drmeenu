import Header from "../components/Header"
import HeroSection from "../components/Homesections/Heroslider"
import AboutSection from "../components/Homesections/aboutsection"
import AboutDoctor from "../components/Homesections/aboutdoctor"
import AreasOfExpertise from "../components/Homesections/areaofexperties"
import CDATASection from "../components/Homesections/cta"
import Slider from "../components/Homesections/slider"
import ObsGynae from "../components/Homesections/ObsGynae"
import Footer from "../components/Footer"
import FemaleInfertility from "../components/Homesections/FemaleInfertility"
import HealthPrioritySection from "../components/Homesections/HealthPrioritySection"
import WhyTrustUs from "../components/Homesections/lastsection"
import CTASection from "../components/CTA"

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
        {<HealthPrioritySection/>}
        {<FemaleInfertility/>}
        {<WhyTrustUs/>}
        <CTASection
        title="Take One Step Closer To"
        highlight="Parenthood"
        description="Every journey to becoming a parent is unique. At Dr Meenu’s Clinic, we combine care, expertise, and technology to give you the best chance of success."
        buttonText="BOOK YOUR APPOINTMENT"
        buttonLink="/contact-us"
      />
        {<Footer/>}
        </>
    )
}

export default Home;