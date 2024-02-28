import React from 'react'

const Skills = ({data}) => {
    return (
        <div className="row p-4">
            <span className="fs-3 text-muted">Skills :</span>
            <div className="col">
                <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >React js </p>
            </div>
            <div className="col">
                <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Node js </p>
            </div>
            <div className="col">
                <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Html </p>
            </div>
            <div className="col">
                <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >CSS</p>
            </div>
            <div className="col">
                <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >javasript </p>
            </div>
            <div className="col">
                <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >C++ </p>
            </div>
        </div>
    )
}

export default Skills