import React, { useContext, useEffect, useState } from "react";
import job from "../../Style/jobCard.module.css";
import GlobalModel from "../../Global/GlobalModel";
import { ActiveModal } from "../..";

const JobCard = ({
    onCardClick,
    id,
    title,
    jobtype,
    location,
    setModel,
    salary,
    postedtime,
    viewJob,
    companyLogo,
}) => {
    const [activeModalState , setActiveModalState] = useContext(ActiveModal);
    return (
        <>
            <div className={`${job.box}`} onClick={() => onCardClick(id)}>
                <div className={job.left}>
                    <div className={job.Logo}>
                        <img src={companyLogo} height={100}
                            className="rounded-3"
                            onError={(e) => e.target.src = "https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg"} width={100} alt="" />
                    </div>
                    <div className={job.Details}>
                        <div className={job.header}>
                            <h2>{title}</h2>
                        </div>
                        <div className={job.basicdetails}>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i className="fa fa-location-dot mt-1 "></i>
                                <span>{location}</span>
                            </div>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i class="fa-regular fa-clock mt-1"></i>
                                <span>{jobtype}</span>
                            </div>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i class="fa-solid fa-indian-rupee-sign mt-1"></i>
                                <span>{salary}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={job.right}>
                    <div>
                        <button className="btn bgbtn" onClick={() => {
                            localStorage.setItem("appliedID" , id)
                            setActiveModalState("ApplyForm")
                        }}>Apply now</button>
                    </div>
                    <div>
                        <span>{postedtime}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobCard;
