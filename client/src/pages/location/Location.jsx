import Header from "../../components/header/Header.jsx"
import LocationInfo from "../../components/locationInfo/LocationInfo.jsx"
import Footer from "../../components/footer/Footer.jsx"

export default function Location({location}) {
    console.log(location);
    return (
        <>
            <Header/>
                <LocationInfo location={location} />
            <Footer />
        </>
      );
}