import React, { useContext, useEffect, useState } from 'react'
import InputText from '../signup/validateInputs'
import edit from "../../Style/edit.module.css"
import useAPI from '../../Hooks/USER/useAPI'

const Apply = ({ setModel , jobs }) => {
    const [progress, setProgress] = useState("0%");
    const [data ,setData] = useState([]);
    const id = localStorage.getItem("appliedID")
    const api = useAPI();
    useEffect(() => {
        const search = async () => {
            try {
                const items = await api.getREQUEST(`jobs?id=${id}`);
                setData(items&&items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        search()
        console.log(data);
    } , [])
    return (
        <>
            <div className={`card h-auto card p-3 ${edit.cardContainer}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="">
                        <span className='text-muted fontDefaultTitle'>Apply to Blue Soft Infotech</span>
                    </div>
                    <div className="">
                        <span onClick={() => setModel(false)}><i className='fa fa-close fs-4'></i></span>
                    </div>
                </div>
                <hr />
                <br />
                <div className='row'>
                    <div class="progress rounded" style={{ height: "15px" }}>
                        <div class="progress-bar rounded" role="progressbar" style={{ width: "55%" }}  ><span>{progress}</span></div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-2 appImageContainer">
                        <img className='appImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBYfT1otzlFrFgIErgyxOyBbO37OM5JsaUA&usqp=CAU" alt="" />
                    </div>
                    <div className='col-md-10 mt-3'>
                        <div><span style={{ fontWeight: "bold" }}>Vimal bhesaniya</span></div>
                        <div><span className='font-weight-normal' style={{ fontSize: "small" }}>Student at Veer Narmad South Gujarat Univercity</span></div>
                        <div><span style={{ fontSize: "10px" }}>Surat, Gujarat, india</span></div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <input type="text" placeholder='First name' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <input type="text" className='form-control' placeholder='Last name' name="" id="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apply