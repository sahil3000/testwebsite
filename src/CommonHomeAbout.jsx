import React from 'react';
import {NavLink} from 'react-router-dom';

const CommonHomeAbout = (props)=>{
    return(
        <>
            <section id="heading" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto pb-sm-5 mb-sm-4">
                            <div className="pt-5 mt-5">
                            <div className="pt-5 mt-5">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1>{props.name }<strong className="brand-name">Test Website</strong></h1>
                                        <h2 className="my-3">We are the team of talented developer making websites</h2>
                                        <div className="mb-5 pb-5">
                                            <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnMsg}</NavLink>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 order-1  order-lg-2 text-center">
                                        <img src={props.imgLink} className="img-fluid" width="300" height="300" alt="pics"/>
                                    </div>
                                </div>

                            </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CommonHomeAbout;