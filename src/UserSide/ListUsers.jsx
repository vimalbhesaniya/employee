import React, { useCallback, useEffect, useState } from "react";
import "../Style/jobview.css";
import useAPI from "../Hooks/USER/useAPI";
import Cookies from "js-cookie";

const ListUsers = () => {
    const [keyword, setKeyword] = useState("");
    const [user , setUser] =useState([])
    const [filterUser , setFilterUser] = useState([]);
    const api = useAPI();

    useEffect(() => {
        const getUser = async() =>{
            const data = await api.getREQUEST("users?limit=10")
            setUser(data);
        }
        const id =Cookies.get("id");
        const FilterUser = async () =>{
            const users = await api.getREQUEST(`myFollowers/${id}`)
            setFilterUser(users[0].targetId)
        }
        getUser();
        FilterUser()
     } , [])

    const handleFollowButton  = useCallback((targetId) => {
        
    } , [])
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
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
                    </div>
                </div>
            </div>
            <div className="container card">
                <div className="card---container">
                    {user?.map((e) => (
                        <div className="card---body card ">
                        <div className="card---picture">
                            <img
                                src={e?.profileImage}
                                className="card---img"
                                alt=""
                                onError={(e)=>e.target.src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"}
                            />
                        </div>
                        <div className="card---header">
                            <div>
                                <span className="text-muted fw-semibold">
                                    {e.firstName} {e.lastName}
                                </span>
                            </div>
                            <div>
                                <span style={{ fontSize: "13px" }}>
                                    Web Developer
                                </span>
                            </div>
                            <div style={{ lineHeight: 1 }}>
                                <span style={{ fontSize: "12px" }}>
                                    student at Veer Narmad South Gujarat
                                    Univercity
                                </span>
                            </div>
                            <div className="row">
                                <button className="btn followBtn p-2 mt-2" onClick={()=>handleFollowButton(e._id)}>Follow <i class="fa-solid fa-user-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListUsers;
