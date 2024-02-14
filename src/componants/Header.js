import React from 'react'
import "../Style/navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import img from "../logo/Logo Files/For Web/png/Color logo - no background.png"
const Header = () => {

	const navigate = useNavigate();

	const performLogOut = () => {
		const ok = window.confirm("Are you sure?");
		if (ok) {
			Cookies.remove("token");
			navigate("/login")
		}
		else {
			navigate(window.location.pathname);
		}
	}

	return (
		<>
			<div className='navbar--'>
				<div className='navbarContainer'>
					<div className='navbarLeft'><img src={img} alt=""  className='navbarLogo'/></div>
					<div className='navbarMenu'>
						<Link className='Link--' to={"/home"}>Home</Link>
						<Link className='Link--' to={"/search"}>Search</Link>
						<Link className='Link--' to={"/nearbyusers"}>Feed</Link>
						<Link className='Link--' to={"/profile"}>Profile</Link>
					</div>
					<div className='navbarRight'>
					<div className='navbarRightChild'>
						<Link className='Link--' to={"/profile"}>Post A Job</Link>
						<button className="navabarButton" onClick={() => {
							performLogOut()
						}
						}> Log out </button>
					</div>

					</div>
				</div>

				<div className='responsivemenu d-block d-md-none'>
					<div className='toggleMenu'>
						<Link className='Link--res' to={"/home"}><i className='fa fa-home'></i></Link>
						<Link className='Link--res' to={"/search"}><i class="fa-solid fa-magnifying-glass"></i></Link>
						<Link className='Link--res' to={"/postanewjob"}><i class="fa-solid fa-plus"></i></Link>
						<Link className='Link--res' to={"/nearbyusers"}><i class="fa-solid fa-users"></i></Link>
						<Link className='Link--res' to={"/profile"}><i class="fa-solid fa-user"></i></Link>
						{/* <button className="btn btn-danger " onClick={performLogOut}>Log Out</button> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header