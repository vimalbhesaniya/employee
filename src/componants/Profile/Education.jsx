import React from 'react'
import "../../Style/profile.css"
const Education = ({univercity,school,institutionName,degreeLevel,startDateSchool,endDateSchool,gpa,certifications}) => {
    return (
        <>
            <div class="dataContainer">
                <div class="data-item">
                    <p className="data-title">University</p>
                    <p className="data-item-info">{univercity}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">School</p>
                    <p className="data-item-info">{school}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Institution Name</p>
                    <p className="data-item-info">{institutionName}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Degree Level </p>
                    <p className="data-item-info">{degreeLevel}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Start Date of School </p>
                    <p className="data-item-info">{startDateSchool}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">End Date of School </p>
                    <p className="data-item-info">{endDateSchool}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">GPA</p>
                    <p className="data-item-info">{gpa}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Certifications </p>
                    <p className="data-item-info">{certifications}</p>
                </div>
                {/* <div class="data-item">
                    <p className="data-title">Online Courses</p>
                    <p className="data-item-info">{onlinecourses}</p>
                </div> */}
            </div>
        </>
    )
}

export default Education