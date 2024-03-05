import React, { useCallback, useEffect, useState } from "react";
import "../../Style/profile.css";
import { Link } from "react-router-dom";
import BasicInfo from "../Profile/BasicInfo";
import Title from "../Profile/Title";
import Skills from "../Profile/Skills";
import SensetiveInfo from "../Profile/SensetiveInfo";
import EditProfile from "../Profile/Apply";
import GlobalModel from "../../Global/GlobalModel";
import EditProfileForm from "../Profile/EditProfileForm";
import DataContainer from "../Profile/DataContainer";
import { createContext } from "react";
import useAPI from "../../Hooks/USER/useAPI";
import Cookies from "js-cookie";
const ToggleEdit = createContext();
const Profile = () => {
    const api = useAPI();

    const [isEditProfile, setIsEditProfile] = useState(false);
    const [profile, setProfile] = useState([]);

    const call = useCallback(async () => {
        const data = await api.getREQUEST(`profile/${Cookies.get("id")}`);
        if (data[0]) {
            setProfile(data[0]);
            console.log(data);
        }
    }, [api]);

    useEffect(() => {
        call();
    }, []);

    return (
        <ToggleEdit.Provider value={[isEditProfile, setIsEditProfile]}>
            <>
                {isEditProfile ? (
                    <GlobalModel modelName={<EditProfileForm />} />
                ) : (
                    ""
                )}
                <section style={{ backgroundColor: "#eee" }} className="mt-5">
                    <div className="container py-5">
                        <Title title={"User Profile"} />
                        <div className="row">
                            <div className="col-lg-4">
                                <BasicInfo
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    description={profile.description}
                                    profileImage={profile.profileImage}
                                    profession={profile.profession}
                                    city={
                                        profile.location &&
                                        profile?.location[0]?.city
                                    }
                                    state={
                                        profile.location &&
                                        profile?.location[0]?.state
                                    }
                                />
                                <div className="card mb-4 mb-lg-0">
                                    <Skills data={profile && profile?.skills} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <SensetiveInfo
                                        personalAddress={
                                            profile.location &&
                                            profile.location[0].personalAddress
                                        }
                                        langauge={profile.langauges}
                                    />
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mb-2">
                                    <div>
                                        <span className="datainfoNavigator">
                                            Education
                                        </span>
                                    </div>
                                    <div>
                                        <span className="datainfoNavigator">
                                            Experience
                                        </span>
                                    </div>
                                    <div>
                                        <span className="datainfoNavigator">
                                            Peoples
                                        </span>
                                    </div>
                                </div>
                                <div className="sensetiveDataContainer">
                                    <DataContainer></DataContainer>
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
export { ToggleEdit };

// like button
{
    /* <button class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></button> */
}

{
    /* <div class="row g-4">
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
                                </div> */
}
