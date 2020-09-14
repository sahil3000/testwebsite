import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
    
    return(
        <>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-10">

                    </div>
                </div>
            </div> */}
            <div className="container-fluid navbar">
                <div className="row" style={{backgroundColor:'deepskyblue'}}>
                    <div className="col-10 mx-auto ">
                        <nav className="navbar navbar-expand-lg navbar-light">
                        <NavLink className="navbar_brand" to="/" >TestWebsite</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink exact  className="nav-link" activeClassName="menu_active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="menu_active" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;