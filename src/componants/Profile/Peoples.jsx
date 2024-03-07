import React from 'react'
import css from "../../Style/All.module.css"
const Peoples = ({ university, school, institution_name, degreelevel, SDOS, EDOS, GPA, certificates, onlinecourses }) => {
    return (
        <>
            <div className={css.usersCard}>
                <div className={css.header}>
                    <span className='text-muted fw-semibold ' style={{ fontSize: "16px" }}>People you may know</span>
                    <span style={{ fontSize: "10px" }}>from your location</span>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1477" className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Divyesh Kubavat</span>
                            <span style={{ fontSize: "10px" }}>Software Developer</span>
                            <span style={{ fontSize: "10px" }}>Surat , gujarat</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Peoples