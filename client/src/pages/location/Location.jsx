import Header from "../../components/header/Header.jsx"
import BarsSection from "../../components/sections/barsSection/BarsSection.jsx"
import Footer from "../../components/footer/Footer.jsx"

import { useState } from "react"

export default function LocationInfo() {
    const [ locations, setLocations ] = useState([])
    
    return (
        <>
            <Header/>
                <BarsSection setLocations={setLocations} locations={locations} />
            <Footer />
        </>
      );
}