import React, { useContext, useState } from 'react'
import DataList from "./assets/DataList";
import edit from "../../Style/edit.module.css"
import ProfessionBox from "./assets/ProfessionBox";
import EditEducation from './Edit/EditEducation';
import EditExperience from './Edit/EditExperience';
import EditAddress from './Edit/EditAddress';
import ProfilePreview from '../signup/Steps/profilePreview';
import { ToggleEdit } from '../Common/profile';
import useFirestorage from "../../Hooks/OTHER/useFirestorage";

const EditProfileForm = () => {
    const upload = useFirestorage();
    const [profilePicture, setProfilePicture] = useState("");
    const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit)
    const [education, setEducation] = useState(false);
    const [experience, setExperience] = useState(false);
    const [address, setAddress] = useState(false);
    const handleFileChange = (event) => {
        try {
            const file = event.target.files[0];

            if (file) {
                setProfilePicture(URL.createObjectURL(file));
            } else {
                setProfilePicture("");
            }
        } catch (error) {
            console.error("Error creating object URL:", error);
        }
    }
    
    
    return (
        <>
            <div className={`card container animate__animated ${isEditProfile ? `animate__bounceInDown` : `animate__bounceOutUp`} h-50  overflow-scroll bg-body-secondary ${edit.cardContainer}`}>
                <div className='d-flex justify-content-between align-align-items-center  '>
                    <span className="mt-2 fs-2 mb-3 fw-bold " >Edit profile</span>
                    <span><i className='fa fa-close fs-2 mt-2 fw-bold' onClick={() => setIsEditProfile(false)}></i></span>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label" > First name :</label>
                        <input type="text" className="form-control " placeholder="first name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Last name :</label>
                        <input type="text" className="form-control " placeholder="last name" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-10">
                        <label htmlFor="" className="form-label ">Profile picture :</label>
                        <input type="file" className="form-control" onChange={(e) => handleFileChange(e)} />
                    </div>
                    <div className="col-md-2">
                        <ProfilePreview image={profilePicture} />
                    </div>
                </div>
                <div className="row mb-3 ">
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Langauges :</label>
                        <input list="langauge" placeholder="Langauges-must be comma(,) saparated" className="form-control" />
                        <DataList Id={"langauge"} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Profession :</label>
                        <input list="profession" placeholder="profession" className="form-control" />
                        <ProfessionBox id={"profession"} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="" className="form-label">Skills :</label>
                        <input type="text" placeholder="Skills-must be comma(,) saparated" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md mb-2 ">
                        <p className=''>Edit your education</p>
                        <button className="btn btn-info" onClick={() => setEducation(!education)}>{!education ? `Education` : `Close`}</button>
                    </div>
                </div>
                {
                    education &&
                    <EditEducation />
                }
                <div className="row">
                    <div className="col-md mb-2 ">
                        <p className=''>Edit your address</p>
                        <button className="btn btn-info" onClick={() => setAddress(!address)}>{!address ? `Address` : `Close`}</button>
                    </div>
                </div>
                {
                    address &&
                    <EditAddress />
                }
                <div className="row mb-2 ">
                    <div className="col-md">
                        <p className=''>Edit your Experience</p>
                        <button className="btn btn-info" onClick={() => setExperience(!experience)}> {!experience ?  "Experience" : `Close`}</button>
                    </div>
                </div>
                {
                    experience &&
                    <EditExperience />
                }
            </div>
            
        </>
    );
}

export default EditProfileForm