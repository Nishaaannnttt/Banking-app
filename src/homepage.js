import React from 'react';
import bgimage from './bgImage.avif';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <div className='hero-left col-md-6'>
                        <h2>Welcome to <span className='hero-logo'>CIBC Bank</span></h2>
                        <p>WELCOME TO CIBC PERSONAL BANKING <br></br>
                            Do more with your money</p>
                        <button className="hero-button cbtn btn-primary">Open Account With Us</button>
                    </div>
                    <div className='bgimage col-md-6'>
                        <img src={bgimage} className="smallimage" alt="bgimage" />
                    </div>
                </div>

                <BodyArea />




            </div>

        </div>
    );
};


const BodyArea = () => {
    return (

        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='row mx-auto'>
                <div className='body-content col-md-4'>

                    <h3>Checquing Account</h3>
                    <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

                </div>

                <div className='body-content col-md-4'>

                    <h3>Saving Account</h3>
                    <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

                </div>

            </div>
        </div>


    );
}

export default Home;