import "./aboutSection.css"
import image from "../../../assets/IMG2.png"

import FiabilityBar from "../../bars/fiabilityBar/FiabilityBar"
import RespectBar from "../../bars/respectBar/RespectBar"
import ServiceBar from "../../bars/serviceBar/ServiceBar"
import SecurityBar from "../../bars/securityBar/SecurityBar"

export default function AboutSection() {
    return (
        <div className="aboutContainer">
            <div className="aboutImg" style={{ backgroundImage: `url(${image})` }}>
                <div className="aboutBackground"></div>                 
            </div>
            <FiabilityBar />
            <RespectBar />
            <ServiceBar />
            <SecurityBar />
        </div>
    )
}