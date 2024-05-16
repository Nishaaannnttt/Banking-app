
import React from 'react';
import './homepage.css';
import background from './bgImage.avif'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage({ balance }) {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div style={myStyle}>
            {/* <div className="mainhome"> */}
            {/* <img src={image} alt="logo"></img> */}
            {/* <div className="home"> */}
            {/* <h1 className="home-text">Welcome to CIBC Bank</h1> */}
            {/* <img className="image" src={image} alt="logo"></img> */}

        </div>
        // </div></div>
    );
}

export default Homepage;
