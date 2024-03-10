import React, { useEffect } from "react";
import "../../Style/jobview.css";
const Card = ({
    profileImage,
    firstName,
    lastName,
    following_id,
    _id,
    handleFollowButton,
    handleUnFollowButton,
    btnText,
    univercity,
    pofession,
}) => {

    return (
        <>
            <div className="card---body card ">
                <div className="card---picture">
                    <img
                        src={profileImage}
                        className="card---img"
                        alt=""
                        onError={(e) =>
                            (e.target.src =
                                "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg")
                        }
                    />
                </div>
                <div className="card---header">
                    <div>
                        <span className="text-muted fw-semibold">
                            {firstName} {lastName}
                        </span>
                    </div>
                    <div className="ellips">
                        <span style={{ fontSize: "13px" }}>{pofession}</span>
                    </div>
                    <div className="ellips">
                        <span style={{ fontSize: "12px" }}>{univercity}</span>
                    </div>
                    <div className="row d-flex  justify-content-center  align-content-center  h-100">
                        {following_id.includes(_id) ? (
                            <button
                                className="btn followBtn p-2 mt-2"
                                onClick={() => handleFollowButton(_id)}
                            >
                                Following
                            </button>
                        ) : (
                            <button
                                className="btn followBtn p-2 mt-2"
                                onClick={() => handleUnFollowButton(_id)}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
