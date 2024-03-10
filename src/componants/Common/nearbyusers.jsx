import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import JobCard from './JobCard';
import "../../Style/saved.css"
import notfound from "../../assets/notfound.json"
import useAPI from '../../Hooks/USER/useAPI';
import Cookies from 'js-cookie';

const Nearbyusers = () => {
    const api = useAPI();
    const [saved, setSaved] = useState([]);
    const [isDeleted , setIsDelete] = useState("");
    useEffect(() => {
        const id = Cookies.get("id");
        const apiCall = async () => {
            const data = await api.getREQUEST(`ListJob/${id}`)
            if (data) {
                setSaved(data)
            }
            else {
                setSaved([]);
            }
        }
        apiCall();
    }, [isDeleted])

    const perFormUnSave =async(id)=>{
        const res = api.deleteREQUEST("delete" , "savedjobs" , {
            _id : id
        })
        setIsDelete(res);
        
    }
    return (
        <>
            <div class="modal-dialog modal-dialog-centered modal-xl" style={{ marginTop: "100px" }}>
                <div class="modal-content p-5">
                    <div class="modal-header">
                        <h5 class="modal-title mx-2">Modal title</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="wid mx-auto mb-4">
                                <div class="d-flex  w-100 flex-column border border-1 rounded">
                                    <div class="first-line border border-top-0 border-start-0 border-end-0 p-2">
                                        <p className='text-muted '><i class="fa fa-bookmark"></i>My items</p>
                                    </div>
                                    <div class="second-line  bg-body-secondary   p-2 d-flex  justify-content-between  px-3">
                                    <p>Saved</p>
                                    <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 wid2">
                                    <div class="d-flex flex-column border border-1 rounded p-2">
                                        <div class="box1 text-center">
                                            <p>My Jobs</p>
                                            <div class="a-box"><a href="">Saved</a><a href="">Applied</a></div>
                                        </div>
                                        {
                                            saved.map((e) => {
                                                return<JobCard
                                                    jobtype={e.jobId.JobType}
                                                    id={e.jobId._id}
                                                    hidden={false}
                                                    savedId={e._id}
                                                    perFormUnSave={perFormUnSave}
                                                    location={`${e.jobId.company && e.jobId.company?.Address[0].city
                                                        } , ${e.company && e.jobId.company?.Address[0].state
                                                        }`}
                                                    postedtime={e.jobId.JobPostedTime.split("T")[0]}
                                                    salary={e.jobId.Salary}
                                                    title={e.jobId.Title}
                                                    companyLogo={e.jobId.company && e.jobId.company.Logo}
                                                />
                                            })
                                        }
                                        {/* {    */}
                                        {/* <JobCard
                                            jobtype={e.JobType}
                                            id={e._id}
                                            perFormSave={perFormSave}
                                            location={`${e.company && e.company?.Address[0].city
                                                } , ${e.company && e.company?.Address[0].state
                                                }`}
                                            postedtime={e.JobPostedTime.split("T")[0]}
                                            salary={e.Salary}
                                            title={e.Title}
                                            companyLogo={e.company && e.company.Logo}
                                        />} */}
                                        {/* <div class="box2">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuWEzknS-d_sqX1Ly9NY7kVTfK8bqTJ4nuw&usqp=CAU" class="img-fluid mx-auto d-block" alt="" />
                                                <h3>No recent job activity</h3>
                                                <p>Find new opportunities and manage your job search progress here.</p>
                                                <a href="">Search for jobs</a>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Nearbyusers;
