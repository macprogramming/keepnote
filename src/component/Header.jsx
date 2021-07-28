import React from 'react';
import logo from '../img/keepnoteLogo.png'

const Header = () => {
    return(
        <>
            <nav className="py-2 bg-yellow border-bottom fixed-top">
                <div className="container d-flex flex-wrap">
                    <div>
                        <img className="img img-fluid" src={logo} width="60px" height="60px" alt="..." /> 
                        <span className="text-white" style={{fontSize:"30px", fontWeight:"bold",padding: "0 10px"}}>Keep Note</span>
                    </div>                    
                </div>
            </nav>
        </>
    )
}

export default Header;