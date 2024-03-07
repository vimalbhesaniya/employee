import React, { useState } from 'react'
import "../Style/jobview.css"

const ListUsers = () => {
    const [keyword, setKeyword] = useState("");
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
            <div className='container card' >
                <div className='card---container'>
                    <div className='card---body'>
                        <div className='card---picture'>
                                <img src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg" className='card---img' alt="" />
                        </div>
                    </div>
                    <div className='card---body'>
                        <div className='card---header'></div>
                    </div>
                    <div className='card---body'>
                        <div className='card---header'></div>
                    </div>
                    <div className='card---body'>
                        <div className='card---header'></div>
                    </div>
                    <div className='card---body'>
                        <div className='card---header'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListUsers