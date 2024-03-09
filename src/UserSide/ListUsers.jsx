import React, { useCallback, useEffect, useState } from "react";
import "../Style/jobview.css";
import useAPI from "../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import Card from "./Components/Card";

const ListUsers = () => {
    const [keyword, setKeyword] = useState("");
    const [user, setUser] = useState([]);
    const [followingId , setFollowingId] = useState([]); 
    const [filterUser, setFilterUser] = useState([]);
    const [followedUser, setFollowedUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = useAPI();
    const id = Cookies.get("id");

    useEffect(() => {
        const getUser = async () => {
            const data = await api.getREQUEST(`notFollowed/${id}/10`);
            setUser(data);
        };
        getUser();
    }, []);

    const handleFollowButton = useCallback((targetId) => {
        setLoading(true)
        const UpdateFollow = async () => {
            const users = await api.patchREQUEST(
                `updateDetails`,
                "userFollow",
                { userId: id },
                {
                    targetId: [targetId],
                }

            );
            setFollowedUser(users);
            setFollowingId((prev)=>{
                if(prev.includes(targetId))
                {
                    return prev
                }
                else{
                    return [...prev, targetId]
                }
            })
        };
        UpdateFollow();
    }, []);
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
                    {user.map((e) => {
                        return<Card
                            btnText={"Follow"}
                            firstName={e.firstName}
                            _id ={e._id}
                            lastName={e.lastName}
                            pofession={e.profession}
                            profileImage={e.profileImage}
                            following_id={followingId}
                            univercity={e.education.univercity}
                            handleFollowButton={() =>handleFollowButton(e._id)}
                        />
                    })
                    }

                </div>
                <div className="container mt-2">
                    <div className="row p-2">
                        <div className="col text-end">
                            <span className="fs-5 HOVER rounded ">see all <i className="fa fa-chevron-right doanimate"></i> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListUsers;
