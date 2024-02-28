import React from "react";
import "../Style/profile.css";
// import InputText from "./signup/validateInputs";
// import { Link } from "react-router-dom";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
const Profile = () => {
    return (
        <section style={{ backgroundColor: '#eee' }} className="mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <span className="fs fs-3">User Profile</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Part1 />
                        <Part2 />
                    </div>
                    <div className="col-lg-8">
                        <Part3/>
                        <Part4/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

// like button
// {/* <button class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></button> */ }