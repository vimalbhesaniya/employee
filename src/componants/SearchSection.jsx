import React, { useState } from "react";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
const SearchSection = () => {
    const [title, setTitle] = useState();
    const [location, setLocation] = useState();
    const [tab ,setTab] = useState("tab1")
    const showTab  = () =>{
        switch (tab) {
            case "tab1":
                return <Tab1 />
                break;
            case "tab2":
                return <Tab2 />
            case "tab3":
                return <Tab3 />
        
            default:
                break;
        }
    }
    const HandleSearch = async () => {
        // await fetch(`http://localhost:5500/search/jobs/${title}/${location}`)
        // .then(response=>response.json())
        // .then(data=>setJobs(data))
        // .catch(error=>console.error("Error Fetching Jobs : ",error));
    };

    return (
        <>
            <div className="center">
                <div
                    class="container border card p-5"
                    style={{ boxShadow: "2px 0px 10px rgba(0,0,0,0.07" }}
                >
                    <div class="row">
                        <span className="text-muted fs-4 text-center mb-3">
                            Open the door to endless career possibilities - your
                            next big opportunity awaits!
                        </span>
                        <div class="col-md-10 ">
                            <div class="row g-2">
                                <div class="col-md-6">
                                    <input
                                        type="text"
                                        class="form-control-default "
                                        placeholder="Job title , Keyword , Company"
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </div>
                                <div class="col-md-6 mt-2">
                                    <input
                                        list="location"
                                        className="form-control-default"
                                        placeholder="State , City ,zipcode"
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                        }}
                                    />
                                    <datalist id="location">
                                        <option
                                            className="opt"
                                            value="Edge"
                                        ></option>
                                        <option
                                            className="opt"
                                            value="Firefox"
                                        ></option>
                                        <option
                                            className="opt"
                                            value="Chrome"
                                        ></option>
                                        <option
                                            className="opt"
                                            value="Opera"
                                        ></option>
                                        <option
                                            className="opt"
                                            value="Safari"
                                        ></option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 mt-4">
                            <button
                                class="btn bgbtn w-100 h-100 "
                                onClick={() => {
                                    HandleSearch();
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="mt-4 text-center mb-4 fs-3 text-info ">Job Listing</h1>
                    <hr  className="mb-4"/>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <h6 className="mt-n1 mb-0" onClick={()=>{
                                        setTab("tab2");
                                    }}>Featured</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <h6 className="mt-n1 mb-0">Full Time</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <h6 className="mt-n1 mb-0">Part Time</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1SlEMh5yawMLAfp5YdzmzoaORPtLqru4fQ&usqp=CAU"} alt="" style={{ width: '80px', height: '80px' }} />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">React Js</h5>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Surat gujarat</span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>23000</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                            <a className="btn btn-primary" href="">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 07-03-3004</small>
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

export default SearchSection;
