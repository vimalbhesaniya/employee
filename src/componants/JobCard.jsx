import React from 'react'
import job from "../Style/jobCard.module.css"

const JobCard = ({
    logo,
    cName,
    postedDate,
    cardJobPosition,
    type,
    city,
    state,
    salary
}) => {
    return (
        <>
            <div className={"container"}>
                <div class="row g-4">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" style={{ width: "80px", height: "80px", }} />
                        <div class="text-start ps-4">
                            <h5 class="mb-3">Software Engineer</h5>
                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span>
                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <a class="btn bgbtn btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                            <a className={`btn ${job.bgbtn}`} href="">Apply Now</a>
                        </div>
                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobCard