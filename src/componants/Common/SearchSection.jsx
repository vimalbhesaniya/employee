import React, { useCallback, useEffect, useState } from "react";
import SearchFilterTabs from "../Tabs/SearchFilterTabs";
import useAPI from "../../Hooks/USER/useAPI";
const SearchSection = () => {
    const [keyword, setKeyWord] = useState("");
    const [location, setLocation] = useState("");
    const [jobs, setJobs] = useState([]);
    const api = useAPI();
    const HandleSearch = async () => {
        try {
            const items = await api.getREQUEST(`search?keyword=${keyword}&location=${location}&tbl=jobs`,);
            setJobs(items && items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        HandleSearch();
    }, [])

    return (
        <>
            <div className='center'>
                <div class="container border card p-5">
                    <div class="row">
                        <div class="col-md-10 ">
                            <div class="row g-2 mb-2">
                                <div class="col-md-6">
                                    <input type="text" class="form-control-default " placeholder="Job title , Keyword , Company" onChange={(e) => setKeyWord(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <input list='location' className='form-control-default' placeholder='State , City ,zipcode' onChange={(e) => setLocation(e.target.value)} />
                                    <datalist id="location">
                                        {/* {jobs.map((e) => {
                                            return <option className='opt' value="Safari"}</option>
                                        })} */}
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 d-flex justify-content-between  align-items-center ">
                            <button
                                class="btn bgbtn w-100"
                                onClick={() => {
                                    HandleSearch();
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container" style={{overflow:"scroll" , height:"50vh"}}>
                    <h1 className="mt-4 text-center mb-4 fs-3 text-info ">Job Listing</h1>
                    <hr className="mb-4" />
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <h6 className="mt-n1 mb-0" onClick={() => {
                                        setKeyWord("remote")
                                    }}>Remote</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <h6 className="mt-n1 mb-0" onClick={() => setKeyWord("fulltime")}>Full Time</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <h6 className="mt-n1 mb-0" onClick={() => setKeyWord("parttime")}>Part Time</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            {jobs.map((e) => {
                                return <SearchFilterTabs
                                    title={e.Title}

                                />
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSection;