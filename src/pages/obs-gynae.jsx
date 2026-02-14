import CTASection from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhyTrustUs from "../components/Homesections/lastsection";
import ObsGynaeSection from "../components/ObsGynaeSection";
import Obsp from "../components/obsp";

const Obs = () => {
  return (
    <>
      {<Header />}
      {<ObsGynaeSection/>}
      {<Obsp />}
      {<WhyTrustUs />}
      <CTASection
        title="Take One Step Closer To"
        highlight="Parenthood"
        description="Every journey to becoming a parent is unique. At Dr Meenu’s Clinic, we combine care, expertise, and technology to give you the best chance of success."
        buttonText="BOOK YOUR APPOINTMENT"
        buttonLink="/contact"
      />
      {<Footer />}
    </>
  );
};

export default Obs;
