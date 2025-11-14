import Footer from "../Components/Layout/Footer";
import SpotlightHero from "../Components/SpotlightHero";

const Home = () => {
  return (
    <>
      <main>
        <SpotlightHero />
        <Footer/>
        {/* other sections (stats, features) below... */}
      </main>
    </>
  );
};

export default Home;
