import "./tag.css";
import React from "react";

export default function Tag(location) {
    return (
        <div className="tagsContainer">
            <ul>
                {/* {location.tags.map((tag) => (
                    <li className="tag" key={tag}>{tag}</li>
                ))} */}
            </ul>
        </div>
    );
}
