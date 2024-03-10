import React, { useEffect, useMemo, useState } from "react";
import ViewJob from "../componants/Common/viewJob";
import "../Style/jobview.css";
import JobCard from "../componants/Common/JobCard";
import useAPI from "../Hooks/USER/useAPI";
import Apply from "../componants/Profile/Apply";
import Cookies from "js-cookie";
const JobsList = () => {

    const [jobs, setJobs] = useState([]);
    const [viewJob, setViewJob] = useState("");
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState("");

    const api = useAPI();

    const call = async () => {
        const data = await api.getREQUEST("fetchAll/jobs/0/0");
        setJobs(data);
    };

    const search = async (keyword) => {
        try {
            const items = await api.getREQUEST(`jobs?title=${keyword}`);
            setJobs(items&&items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            search(keyword);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [keyword]);

    useEffect(() => {
        call();
    }, []);

    const  onCardClick =(id) =>{
        setViewJob(prev=>{
            if(prev === id){
                return ""
            }else {
                return id
            }
        });
    }

    const perFormSave = async (jobId) => {
        console.log(jobId);
        const userId= Cookies.get("id");
        const response = await api.postREQUEST("savedJob" ,  JSON.stringify({userId , jobId}))
        
    }

    return (
        <>
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row-jobList">
                    <div className="col-jobList">
                        <span className="fs-3">Recommended for you</span>
                    </div>
                    <div className="col-jobList">
                        <div className="job--input">
                            <input
                                type="text"
                                className="form-control h-100 w-100"
                                placeholder={"type to search"}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="job--select">
                            <select
                                value={"filter"}
                                className="form-select h-100 w-100"
                                id=""
                            >
                                <option value="" className="">
                                    Filter Jobs
                                </option>
                                <option value="" className="">
                                    Letest
                                </option>
                                <option value="" className="">
                                    Based on your skills
                                </option>
                                <option value="" className="">
                                    Near by you
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container allJobs"> 
                <div className="jobCard mt-5 gap-2 d-flex flex-column ">
                    {jobs?.map((e) => {
                        return (
                            <>
                                <JobCard
                                    onCardClick={onCardClick}
                                    setVisible={setVisible}
                                    visible={visible}
                                    viewJob={viewJob}
                                    jobtype={e.JobType}
                                    id={e._id}
                                    hidden={true}
                                    perFormSave={perFormSave}
                                    location={`${e.company && e.company?.Address[0].city
                                        } , ${e.company && e.company?.Address[0].state
                                        }`}
                                    postedtime={e.JobPostedTime.split("T")[0]}
                                    salary={e.Salary}
                                    title={e.Title}
                                    companyLogo={e.company && e.company.Logo}
                                />
                                {viewJob == e._id && (
                                    <div className="viewjobList">
                                        <ViewJob
                                            setViewJob={setViewJob}
                                            viewJob={viewJob}
                                            visible={visible}
                                            data={e}
                                        />
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default JobsList;
