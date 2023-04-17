import Header from "../../components/header/Header.jsx"
import LocationInfo from "../../components/locationInfo/LocationInfo.jsx"
import Footer from "../../components/footer/Footer.jsx"

import NotFound from "../notFound/NotFound.jsx";

export default function Location({location}) {
    console.log(location);
    if(location === undefined){
        return (
            <NotFound />
        );
    }else{
        return (
            <>
                <Header/>
                    <LocationInfo location={location} />
                <Footer />
            </>
        );
    }
}