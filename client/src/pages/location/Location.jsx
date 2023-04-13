import Header from "../../components/header/Header.jsx"
import LocationInfo from "../../components/sections/locationSection/LocationSection.jsx"
import Footer from "../../components/footer/Footer.jsx"

import { useState } from "react"

export default function Location() {
    const [ locations, setLocations ] = useState([])
    
    return (
        <>
            <Header/>
                <LocationInfo setLocations={setLocations} locations={locations} />
            <Footer />
        </>
      );
}