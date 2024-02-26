import React from 'react';
import "../Style/noti.css"

const Notifications = ({ message, onClose }) => {
    return (
        <div className="notification">
            <div className='notification-content p-4'>
                <button class="btn bgbtn close" href="">close</button>
                <span className="text-muted  fs-4 mb-5">Notifications</span>
                <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                        <div class="text-start ps-4">
                            <h5 class="mb-3">Yash Kalambe</h5>
                            <span class="me-3">Congratulations , Your application was accepted by Microsoft</span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <button class="btn bgbtn" href=""><i class="fa-solid fa-close"></i></button>
                        </div>
                        <div>
                            <span className={"fs-6"}>2h Ago</span>
                        </div>
                    </div>
                </div>

                <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                        <div class="text-start ps-4">
                            <h5 class="mb-3">Yash Kalambe</h5>
                            <span class="me-3">Congratulations , Your application was accepted by Microsoft</span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <button class="btn bgbtn" href=""><i class="fa-solid fa-close"></i></button>
                        </div>
                        <div>
                            <span className={"fs-6"}>2h Ago</span>
                        </div>
                    </div>
                </div>
                <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                        <div class="text-start ps-4">
                            <h5 class="mb-3">Yash Kalambe</h5>
                            <span class="me-3">Congratulations , Your application was accepted by Microsoft</span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <button class="btn bgbtn" href=""><i class="fa-solid fa-close"></i></button>
                        </div>
                        <div>
                            <span className={"fs-6"}>2h Ago</span>
                        </div>
                    </div>
                </div>
                <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
                        <div class="text-start ps-4">
                            <h5 class="mb-3">Yash Kalambe</h5>
                            <span class="me-3">Congratulations , Your application was accepted by Microsoft</span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <button class="btn bgbtn" href=""><i class="fa-solid fa-close"></i></button>
                        </div>
                        <div>
                            <span className={"fs-6"}>2h Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
