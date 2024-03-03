import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ToggleEdit } from '../Common/profile'
const SensetiveInfo = ({ personalAddress, langauge }) => {
    const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit)
    return (
        <div className="card-body">
            <div className="container">
                <div className=" d-flex justify-content-between mb-2">
                    <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Followers 320</p>
                    <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }}>Following  340</p>
                    <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Connections 340</p>
                </div>
                <div className=" d-flex justify-content-between mb-2">
                    <button type="button" className="btn bgbtn" onClick={() => setIsEditProfile(true)} >Edit profile</button>
                    <label htmlFor='fileReader' className="btn bgbtn">Upload Resume</label>
                    <input type="file" id='fileReader' hidden />
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="mb-4 mb-lg-0">
                    <div className=" d-flex justify-content-between flex-wrap  mb-2">
                        <div className="col-md-6">
                            <p className="text-muted  fs-5"  >Personal address :</p>
                            <p className="">{personalAddress}</p>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <div className="row">
                                    <span className="fs-5 text-muted">Langauge Known</span>
                                    {langauge?.map((e) => {
                                        return <div className="col">
                                            <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >{e}</p>
                                        </div>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensetiveInfo