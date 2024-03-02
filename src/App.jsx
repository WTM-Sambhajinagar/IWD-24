import Landing from "./components/Landing";
import OnScroll from "./components/OnScroll";
import Iwd from "./components/IWDAbout/iwd";
import Theme from "./components/Theme/Theme";
import MainPricing from "./components/Pricing/MainPricing";
import StyledText from "../src/components/Animatednumber/PassesHeading";
import Grid from "../src/components/Animatednumber/CircleGrid";
import Footer from "./components/Footer";
import Venue from "./components/Venue/Venue";
import Card from "./components/communitysaying/cards";
import "./App.css";
import EcosystemPartner from "./components/EcosystemPartner/EcosystemPartner";
import {Schedule} from "./components/Schedule/Schedule.jsx";

const App = () => {
  return (
      <main className="mainSection">
          <section className="relative">
              <Landing/>
          </section>
          <section>
              <Iwd/>
          </section>
          {/*<section>*/}
          {/*    <Card/>*/}
          {/*</section>*/}
          <section>
              <Theme/>
          </section>

          <section>
              <StyledText paragraphText=" We are speaking louder"/>
              <Grid/>
          </section>
          <section>
              <Schedule/>
          </section>
          <section>
              <EcosystemPartner/>
          </section>
          {/*<section>*/}
          {/*    <SpeakerCard/>*/}
          {/*</section>*/}
          <section>
              <MainPricing/>
          </section>

          <section>
              <Venue/>
          </section>
          <section className="relative lg:hidden">
              <OnScroll/>
          </section>
          <section className="hidden md:flex">
              <Footer/>
          </section>
      </main>
  );
};

export default App;
