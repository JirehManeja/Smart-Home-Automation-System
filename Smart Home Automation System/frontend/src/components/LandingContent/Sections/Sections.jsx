import React from "react";
import './Sections.css';
import Button from "../../Button/Button";

function Sections({ title, subtitle, description, imageSrc, isReversed = false, backgroundColor = '#022737', btnName, onButtonClick }) {
    return (
        <div className="wrapper">
            <div className={`content-section ${isReversed ? 'reversed' : ''}`} style={{ backgroundColor }}>
                <div className="text-section">
                    <h2 className="title">{title}</h2>
                    <h4 className="subtitle">{subtitle}</h4>
                    <p className="description">{description}</p>
                    {btnName && <Button btnName={btnName} onClick={onButtonClick} />} {/* Attach the click handler */}
                </div>
                <div className="image-section">
                    <img src={imageSrc} alt="" className="image" />
                </div>
            </div>
        </div>
    );
}

export default Sections;