import Header from "../components/Header";
import AreasOfExpertise from "../components/Homesections/areaofexperties";
import ConsultationCTA from "../components/Homesections/cta";
import WhyTrustUs from "../components/Homesections/lastsection";
import Aboutus from "../components/aboutus";
import CTASection from "../components/CTA";
import Footer from "../components/Footer";
const About = ()=>{
    return(
        <>
        {<Header/>}
        {<Aboutus/>}
        {<AreasOfExpertise/>}
        {<ConsultationCTA/>}
        {<WhyTrustUs/>}
          <CTASection
        title="Take One Step Closer To"
        highlight="Parenthood"
        description="Every journey to becoming a parent is unique. At Dr Meenu’s Clinic, we combine care, expertise, and technology to give you the best chance of success."
        buttonText="BOOK YOUR APPOINTMENT"
        buttonLink="/contact"
      />
      {<Footer/>}
        </>
    )
}

export default About;