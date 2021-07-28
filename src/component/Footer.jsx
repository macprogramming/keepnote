import React from 'react';

const Footer = () => {
    const Year = new Date().getFullYear()
    return(
        <>
            <div className="container">
                <div className="row">
                    <footer className="footer mt-auto bg-yellow">
                        <div className="container">
                            <span className="">@mac_programming {Year}</span>
                        </div>
                    </footer>
                </div>
            </div> 
        </>
    )
}

export default Footer;