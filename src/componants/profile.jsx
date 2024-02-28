import React, { useState } from "react";
import "../Style/profile.css";
import { Link } from "react-router-dom";
import BasicInfo from "./Profile/BasicInfo";
import Title from "./Profile/Title";
import Skills from "./Profile/Skills";
import SensetiveInfo from "./Profile/SensetiveInfo";
import EditProfile from "./Profile/EditProfile";
import GlobalModel from "../Global/GlobalModel";
import { createContext } from "react";
const ToggleEdit = createContext();
const Profile = () => {
    const [isEditProfile , setIsEditProfile] = useState(false)
    return (
        <ToggleEdit.Provider value={setIsEditProfile}> 
            <>
                {isEditProfile ? <GlobalModel modelName={<EditProfile />} /> : ""}
                <section style={{ backgroundColor: '#eee' }} className="mt-5">
                    <div className="container py-5">
                        <Title title={"User Profile"} />
                        <div className="row">
                            <div className="col-lg-4">
                                <BasicInfo />
                                <div className="card mb-4 mb-lg-0">
                                    <Skills />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <SensetiveInfo setIsEditProfile={setIsEditProfile} />
                                </div>
                                <div class="row g-4">
                                    <span className="text-muted  fs-4">People you may know</span>
                                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
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
            </>
        </ToggleEdit.Provider>
    );
};

export default Profile;
export {ToggleEdit}

// like button
{/* <button class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></button> */ }