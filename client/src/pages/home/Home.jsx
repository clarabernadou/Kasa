import Header from "../../components/header/Header.jsx"
import SloganSection from "../../components/sloganSection/SloganSection.jsx"
import CardsSection from "../../components/cardsSection/CardsSection.jsx"
import Footer from "../../components/footer/Footer.jsx"

import { useState } from "react"

export default function Home() {
    const [ locations, setLocations ] = useState([])
    return (
        <>
          <Header/>
            <SloganSection />
            <CardsSection setLocations={setLocations} locations={locations}/>
          <Footer />
        </>
      );
}
