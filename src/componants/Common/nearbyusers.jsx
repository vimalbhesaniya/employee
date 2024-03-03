import React from 'react';
import Lottie from 'lottie-react';
import notfound from "../../assets/notfound.json"

const Nearbyusers = ({ title, description, imageUrl }) => {
    return (
        <>
            <div className='container d-flex justify-content-center align-items-center flex-column mt-3' >
                <div class="mt-5 py-5">
                    <div className='d-flex justify-content-center align-items-center gap-4'>
                        <div className=''><span className='success'>Accepted</span></div>
                        <div className=''><span className='reject'>Rejected</span></div>
                        <div className=''><span className='panding'>panding</span></div>
                    </div>
                    <div class="text-center row">
                        <div class=" col-md-6">
                            <Lottie
                                animationData={notfound}></Lottie>
                        </div>
                        <div class=" col-md-6 d-flex flex-column justify-content-center  align-items-center">
                            <p class="fs-3"> <span class="text-danger">Opps!</span> No Applications  found.</p>
                            <p class="lead">
                                Find new opportunities and manage your job search progress here.
                            </p>
                            <a href="index.html" class="btn bgbtn">Go Home</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Nearbyusers;
