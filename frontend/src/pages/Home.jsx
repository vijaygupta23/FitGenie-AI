import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Programs from "../components/landing/Programs";
import Transform from "../components/landing/Transform";
import Footer from "../components/landing/Footer";
import Pricing from "../components/landing/Pricing";

const Home = () => {
  return (
    <div className="bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Pricing />
      <Transform />
      <Footer />
    </div>
  );
};

export default Home;
