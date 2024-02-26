import React from "react";
import "../Style/profile.css";
import InputText from "./signup/validateInputs";
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <section style={{ backgroundColor: '#eee' }} className="mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <span className="fs fs-3">User Profile</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3">Vimal bhesaniya</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Surat , Gujarat</p>
                                <p className="text-muted ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quasi, ratione rerum iste numquam omnis fuga beatae porro suscipit animi est ut earum quam consectetur itaque delectus nihil tempore nostrum!</p>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="row p-4">
                                <span className="fs-3 text-muted">Skills :</span>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >React js </p>
                                </div>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Node js </p>
                                </div>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Html </p>
                                </div>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >CSS</p>
                                </div>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >javasript </p>
                                </div>
                                <div className="col">
                                    <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >C++ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="container">
                                    <div className=" d-flex justify-content-between mb-2">
                                        <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Followers 320</p>
                                        <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }}>Following  340</p>
                                        <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Connections 340</p>
                                    </div>
                                    <div className=" d-flex justify-content-between mb-2">
                                        <button type="button" className="btn bgbtn">Edit profile</button>
                                        <button type="button" className="btn bgbtn ms-1">Upload resume</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="container">
                                    <div className="mb-4 mb-lg-0">
                                        <div className=" d-flex justify-content-between flex-wrap  mb-2">
                                            <div className="col-md-6">
                                                <p className="text-muted  fs-5"  >Personal address :</p>
                                                <p className="">citylight vesu ,dumas road</p>
                                            </div>
                                            <div className="col-md-6">
                                                {/* <p className="text-muted  fs-5" >Langauge known</p> */}
                                                <div className="">
                                                    <div className="row">
                                                        <span className="fs-5 text-muted">Skills :</span>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >React js </p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Node js </p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Html </p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >CSS</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >javasript </p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >C++ </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4">
                        <span className="text-muted  fs-4">People you may know</span>
                                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{width: "80px" ,  height: "80px"}} />
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">Yash Kalambe</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <button class="btn bgbtn text-nowrap me-3" href=""><i class="fa-solid fa-user-plus"></i> Connect</button>
                                            <button class="btn bgbtn" href="">Profile</button>
                                        </div>

                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

// like button
{/* <button class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></button> */}