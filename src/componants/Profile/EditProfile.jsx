import React, { useContext, useState } from 'react'
import InputText from '../signup/validateInputs'
import edit from "../../Style/edit.module.css"
import { ToggleEdit } from '../profile'
const EditProfile = () => {
    const [progress , setProgress] = useState("0%")
    const toggle =useContext(ToggleEdit)
    return (
        <>
            <div className={`card h-auto card p-3 ${edit.cardContainer}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="">
                        <span className='text-muted fontDefaultTitle'>Apply to Blue Soft Infotech</span>
                    </div>
                    <div className="">
                        <span onClick={()=>toggle(false)}><i className='fa fa-close fs-4'></i></span>
                    </div>
                </div>
                <hr />
                <br />
                <div className='row'>
                    <div class="progress rounded" style={{height:"15px"}}>
                        <div class="progress-bar rounded" role="progressbar"style={{width:"25%"}}  ><span>{progress}</span></div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-2 appImageContainer">
                        <img className='appImage' src="https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=828&q=75" alt="" />
                    </div>
                    <div className='col-md-10 mt-3'>
                        <div><span style={{fontWeight:"bold"}}>Vimal bhesaniya</span></div>
                        <div><span className='font-weight-normal' style={{fontSize:"small"}}>Student at Veer Narmad South Gujarat Univercity</span></div>
                        <div><span style={{fontSize:"10px"}}>Surat, Gujarat, india</span></div>                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile