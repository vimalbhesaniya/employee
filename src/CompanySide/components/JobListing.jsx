import React, { useContext } from "react";
import { ActiveModal } from "../..";    
import JobsCard from "./JobsCard";
const JobListing = () => {
    const DummyJobData = {
        Title: "Software Developer",
        Position: "Full-time",
        JobPostedTime: "2024-03-04T12:00:00.000Z",
        Description: {
            JobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit deleniti enim beatae dolor! Autem, cumque? Explicabo exercitationem ducimus dolorum quos in tempore excepturi. Eius quibusdam impedit inventore nisi similique!",
            TechnicalDescription: "The ideal candidate should have strong knowledge of programming languages...",
        },
        Experience: "3-5 years",
        JobType: "Permanent",
        Salary: "₹10,00,000 - ₹15,00,000 per annum"
    };
    const [activeModalState ,  setActiveModalState] = useContext(ActiveModal)
    return (
        <>
            <div
                className="container  overflow-scroll vh-100 card"
                style={{ marginTop: "80px" }}
            >
                <div className="row p-3">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <span className="fs-3">My Jobs</span>
                                <span className="fs-3"> : 102</span>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end ">
                        <button className="bgPrimary btn" onClick={()=>setActiveModalState("postajob")}><i className="fa fa-plus"></i> Post a job</button>
                    </div>
                </div>
                <div className="row mb-5">
                    <JobsCard />
                </div>
                <div className="row mb-5"></div>
            </div>
        </>
    );
};

export default JobListing;


