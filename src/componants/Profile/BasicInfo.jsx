import React from 'react'

const BasicInfo = ({firstName , lastName , profession , city , state , description}) => {
    return (
        <div className="card mb-4">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3 ">{firstName} {lastName}</h5>
                <p className="text-muted mb-1">{profession}</p>
                <p className="text-muted mb-4">{state}, {city}</p>
                <p className="text-muted text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quasi, ratione rerum iste numquam omnis fuga beatae porro suscipit animi est ut earum quam consectetur itaque delectus nihil tempore nostrum!</p>
            </div>
        </div>
    )
}

export default BasicInfo