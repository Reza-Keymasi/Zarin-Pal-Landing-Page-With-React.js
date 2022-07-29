import React from 'react';

// components
import { Navbar, Banner, Cards, ZarinPalOptions, StartBox, Support, Footer,}  from "./Index.jsx"


// Images
import Bell from "../../assets/images/bell.svg";

const Landing = () => {

    const style = {
        backgroundColor:"#2e82ff",
        width: "fit-content",
        padding: "7px 7px 0",
        borderRadius: "50%",
        position: "fixed",
        bottom: "20px",
        left: "20px"
    }

    const ImgStyle = {
        width: "40px"
    }

    return (
        <div>

            <Navbar />
        
            <Banner />

            <Cards />

            <ZarinPalOptions />
            
            <StartBox />

            <Support />

            <Footer />

            <div style={style}>
                <img style={ImgStyle} src={Bell} alt="bell" />
            </div>

        </div>
        
    );
};

export default Landing;