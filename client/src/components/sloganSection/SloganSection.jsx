import "./sloganSection.css"
import image from "../../assets/IMG.png"

export default function SloganSection() {
    return (
        <div className="sloganContainer">
            <div className="sloganImg" style={{ backgroundImage: `url(${image})` }}>
                <div className="sloganBackground"></div>
                <h1>Chez vous, partout et ailleurs</h1>                    
            </div>
        </div>
    )
}