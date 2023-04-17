import Header from "../../components/header/Header.jsx"
import SloganSection from "../../components/sections/sloganSection/SloganSection.jsx"
import CardsSection from "../../components/sections/cardsSection/CardsSection.jsx"
import Footer from "../../components/footer/Footer.jsx"

export default function Home({locations}) {
  console.log(locations);
    return (
        <>
          <Header/>
            <SloganSection />
            <CardsSection locations={locations}/>
          <Footer />
        </>
      );
}
