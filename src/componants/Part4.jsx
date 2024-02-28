import React from 'react'

const Part4 = () => {
    return (
        <>
            <div class="row g-4">
                <span className="text-muted  fs-4">People you may know</span>
                <div class="col-sm-12 col-md-6 d-flex align-items-center">
                    <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                    <div class="text-start ps-4">
                        <h5 class="mb-3">Yash Kalambe</h5>
                        <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                        <button class="btn bgbtn text-nowrap me-3" href=""><i class="fa-solid fa-user-plus"></i> Connect</button>
                        <button class="btn bgbtn" href="">Profile</button>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 d-flex align-items-center">
                    <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                    <div class="text-start ps-4">
                        <h5 class="mb-3">Vimal Bhesaniya</h5>
                        <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                        <button class="btn bgbtn text-nowrap me-3" href=""><i class="fa-solid fa-user-plus"></i> Connect</button>
                        <button class="btn bgbtn" href="">Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part4