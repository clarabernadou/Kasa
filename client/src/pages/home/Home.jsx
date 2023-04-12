import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import CardsSection from "../../components/cardsSection/CardsSection.jsx"

import { useState } from "react"

export default function Home() {
    const [ locations, setLocations ] = useState([])
    return (
        <>
          <Header/>
            <CardsSection setLocations={setLocations} locations={locations}/>
          <Footer />
        </>
      );
}
