import React from 'react'
import "../../Style/jobview.css"
const   ViewJob = ({ setViewJob, viewJob, visible, setVisible  , data}) => {
    console.log(data);
    return (
        <>
            <div className={"view container z-3 "}  >
                <div class="modal-header pt-3 pb-2">
                    <h1 class="px-2 fs-3 text-black fw-bold">{data.Title}</h1>
                    <i className='fa fa-close fs-3 px-2' onClick={() => {
                        setViewJob("")
                    }}></i>
                </div>
                <hr />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="sec1-box">
                                <div class="d-flex justify-content-between">
                                    <h3 className='fs-4'>{data.company.Industry}</h3>
                                    <div class="icon-box">
                                        <a href="" class="text-decoration-none text-dark"><i class="bx bx-dots-horizontal-rounded d-block fs-1"></i></a>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center flex-lg-row flex-md-row flex-sm-row flex-row flex-wrap">
                                    <span>{data.company.Name} </span>
                                    <span>{data.company.Address[0].personalAddress}</span>
                                    <span> 3 hours ago</span>
                                    <span>13 applicants</span>
                                </div>
                                <ul>
                                    <li><i class="fa fa-briefcase"></i>{data.Position}</li>
                                    <li><i class="fa fa-building"></i>201-500 employees</li>
                                    <li><i class="fa fa-list-check"></i><a href="">Skills: Shopify, Project Management, +4 more</a></li>
                                    <li><i class="fa fa-shield-halved"></i>Job poster joined LinkedIn in 2019</li>
                                    <li><i class="fa fa-lightbulb"></i>See how you compare to 13 applicants</li>
                                </ul>
                                <div class="d-flex mt-4 align-items-center">
                                    <a href="" class="apply-btn"><i class="bx bxl-linkedin-square"></i>Easy Apply</a>
                                    <a href="" class="save-btn">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="sec2-box mt-3">
                                <h2 class="fs-4">About the job</h2>
                                <div class="strong-box">
                                    <strong>{data.Title} - {data.Experience} Experience</strong>
                                    <strong>Position: {data.Title}</strong>
                                    <strong>Location: { data.company.Address[0].state} </strong>
                                </div>
                                <div class="about-box">
                                    <p>Overview</p>
                                    <ul class="about-ul">
                                        <li>
                                            {/* As a Senior Backend Developer at Navkar, you will be an integral part of our development team, contributing to the design, development, and
                                            optimization of our smart messaging and communication platform. */}
                                            {data.Description.JobDescription}
                                        </li>
                                        <li>
                                            Your primary focus will be on the backend, utilizing your expertise in Node.js and related technologies to build efficient, scalable, and reliable
                                            microservices.
                                        </li>
                                    </ul>
                                    <p>Key Responsibilities:</p>
                                    <ul class="about-ul">
                                        <li>{data.Description.TechnicalDescription}</li>
                                        <li>In-depth knowledge in JavaScript including ES6+ and Typescript</li>
                                        <li>Expert in Node.js and frameworks available for it such as express, etc</li>
                                        <li>Expert in node.js file system, HTTP module, Events, etc</li>
                                        <li>Knowledge of functional and Object oriented programming</li>
                                        <li>Experience with common FrontEnd tools like React ,Angular etc</li>
                                    </ul>

                                    <p>Qualifications and Skills:</p>
                                    <ul class="about-ul">
                                        <li>At least 2.5 to 4 years of professional experience as a Backend Developer, with a strong focus on Node.js development.</li>
                                        <li>Solid understanding of microservices architecture and related concepts.</li>
                                        <li>Proficiency in working with databases, particularly MongoDB.</li>
                                        <li>Familiarity with messaging systems like Kafka is a plus.</li>
                                        <li>Strong problem-solving skills and a proactive attitude towards challenges.</li>
                                    </ul>

                                    <p>Benefits</p>
                                    <ul class="about-ul">
                                        <li>Monday to Friday working</li>
                                        <li>Flexible working hours</li>
                                        <li>Welcoming workplace atmosphere</li>
                                        <li>Emphasis on continuous learning</li>
                                        <li>Opportunities to engage with state-of-the-art technologies</li>
                                    </ul>

                                    <span>Posted on Feb 14, 2024. </span>
                                </div>
                                <div class="qualification-box">
                                    <h3 class="fs-5">Qualifications</h3>
                                    <div class="q-box">
                                        <div class="pencil">
                                            <img src="pencil.png" alt="" />
                                        </div>
                                        <p>Stand out by adding skills associated with the job post</p>
                                    </div>
                                </div>
                                <div class="skill-box">
                                    <h3 class="fs-5">Skills added by the job poster</h3>
                                    <div class="s-box">
                                        <div class="s-mini-box1">
                                            <i class="fa-solid fa-triangle-exclamation"></i>
                                        </div>
                                        <div class="s-mini-box2">
                                            <h4>10 skills missing on your profile</h4>
                                            <a href="">Apache Kafka, Back-End Web Development, Methodology, Node.js, Object Oriented</a>
                                        </div>
                                    </div>
                                    <div class="alert alert-primary mt-4">
                                        <div class="alert-box d-flex align-items-center">
                                            <div class="s-mini-box1">
                                                <i class="fa fa-regular fa-lightbulb fs-4"></i>
                                            </div>
                                            <div class="s-mini-box2">
                                                <p class="alert-p">
                                                    Add skills you have to your profile to stand out to the employer.<a href="" class="ms-2 link-primary fw-bold">Add skills</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button>Show Qualification Details</button>
                                </div>
                                <div class="goal-box">
                                    <h3 class="fs-5">Achieve your goals faster with Premium</h3>
                                    <p>Get exclusive access to applicant insights, see jobs where you’d be a top applicant and more</p>
                                    <button>Try Premium for ₹0</button>
                                    <span>1-month free trial. Cancel anytime. </span>
                                </div>
                                <div class="company-box">
                                    <h3 class="fs-5">About the company</h3>
                                    <div class="company-mini">
                                        <div class="logo-box">
                                            <img src="logo.jfif" alt="" />
                                        </div>
                                        <div class="d-flex flex-column ps-2 wd">
                                            <h6>NTCL</h6>
                                            <p class="m-0">5,501 followers</p>
                                        </div>
                                        <button class="follow"><i class="bx bx-plus"></i> Follow</button>
                                    </div>
                                    <h4>IT Services and IT Consulting 11-50 employees 10 on LinkedIn</h4>
                                    <p>Navkar Technology and Communication LLP is a tech provider of innovative software solutions for businesses across various industries.</p>
                                    <p>
                                        Our product- AiTell WhatsApp CRM is a customer centric tool that allows businesses to manage business communication and interact with their customers
                                        using the WhatsApp messaging platform through Meta official business solution provider APIs. It enables businesses to centralize customer communication,
                                        streamline interactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewJob