import React, { useCallback, useEffect, useState } from "react";
import css from "../../Style/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "animate.css";
import img from "../../logo/2.png";
import { act } from "react-dom/test-utils";
import Notifications from "./Notifications";
import GlobalModel from "../../Global/GlobalModel";
const Header = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleButtonClick = () => {
        setShowNotification(!showNotification);
    };

    const performLogOut = () => {
        const ok = window.confirm("Are you sure?");
        if (ok) {
            Cookies.remove("token");
            navigate("/login");
        } else {
            navigate(window.location.pathname);
        }
    };

    return (
        <>
            {showNotification ? <GlobalModel handleButtonClick={handleButtonClick} /> : ""}
            <div className={css.navbar}>
                <div className={css.navbarContainer}>
                    <div className={css.Logo}>
                        <img src={img} alt="" className={css.navbarLogo} />
                    </div>
                    <div className={css.navbarLeft}>
                        <div
                            className={
                                window.location.pathname === `/home`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/home"}>
                                Home
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname === `/compaies`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/search"}>
                                Companies
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname === `/nearbyusers`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/nearbyusers"}>
                                My Applications
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname === `/jobs`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/jobs"}>
                                Jobs
                            </Link>
                        </div>
                    </div>
                    <div className={css.navbarRight}>
                        <div className={css.navbarRightChild}>
                            <div
                                className={
                                    window.location.pathname === `/search`
                                        ? `${css.navLinkActive}`
                                        : `${css.navLinkBox}`
                                }
                            >
                                <Link className={css.navLink} to={"/search"}>
                                    <i class="fa-solid fa-search"></i>
                                </Link>
                            </div>
                            <div
                                className={
                                    window.location.pathname === `/saved`
                                        ? `${css.navLinkActive}`
                                        : `${css.navLinkBox}`
                                }
                            >
                                <Link className={css.navLink} to={"/saved"}>
                                    <i class="fa-solid fa-bookmark"></i>
                                </Link>
                            </div>
                            <div
                                className={
                                    window.location.pathname === `/notificaitons`
                                        ? `${css.navLinkActive}`
                                        : `${css.navLinkBox}`
                                }
                            >
                                <button
                                    className={css.navLinkBtn}
                                    onClick={handleButtonClick}
                                >
                                    <i class="fa-solid fa-bell"></i>
                                </button>
                            </div>
                            <div
                                className={
                                    window.location.pathname === `/profile`
                                        ? `${css.navLinkActive}`
                                        : `${css.navLinkBox}`
                                }
                            >
                                <Link className={`${css.navLink} `} to={"/profile"}>
                                    <i class="fa-solid fa-user"></i>
                                </Link>
                            </div>
                            <div className={css.navSaperator}></div>
                            <div className={`${css.navLinkBox}`}>
                                <Link
                                    className={css.resMenu}
                                    to={"/notifications"}
                                    onClick={() => performLogOut()}
                                >
                                    Employers/Post job
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        <div className={css.navbarRightRes}>
                            <div className={css.navbarRightChild}>
                                <div
                                    className={
                                        window.location.pathname ===
                                            `/notificaitons`
                                            ? `${css.navLinkActive}`
                                            : `${css.navLinkBox}`
                                    }
                                >
                                    <button
                                        className={css.navLinkBtn}
                                        onClick={handleButtonClick}
                                    >
                                        <i class="fa-solid fa-bell"></i>
                                    </button>
                                </div>
                                <div
                                    className={
                                        window.location.pathname == `/profile`
                                            ? `${css.navLinkActive}`
                                            : `${css.navLinkBox}`
                                    }
                                >
                                    <Link
                                        className={css.navLink}
                                        to={"/profile"}
                                    >
                                        <i class="fa-solid fa-user"></i>
                                    </Link>
                                </div>
                                <div className={css.navSaperator}></div>
                                <div className={`${css.navLinkBoxBar}`}>
                                    <div
                                        className={`${css.navLinkBoxBar} `}
                                        onClick={() => {
                                            setActive(!active);
                                        }}
                                    >
                                        <span
                                            className={css.navMenuBar}
                                            to={"/saved"}
                                        >
                                            {active ? (
                                                <i class="fa-solid fa-xmark"></i>
                                            ) : (
                                                <i class="fa-solid fa-bars"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {active && (
                    <div
                        className={`${css.toggleMenu} animate__animated animate__slideInUp animate__faster`}
                    >
                        <div
                            className={
                                window.location.pathname == `/home`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/home"}>
                                <i class="fa-solid fa-home"></i>
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname == `/jobs`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/jobs"}>
                            <i class="fa-solid fa-briefcase"></i>
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname == `/profile`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/profile"}>
                                <i class="fa-solid fa-users"></i>
                            </Link>
                        </div>
                        <div
                            className={
                                window.location.pathname == `/search`
                                    ? `${css.navLinkActive}`
                                    : `${css.navLinkBox}`
                            }
                        >
                            <Link className={css.navLink} to={"/search"}>
                                <i class="fa-solid fa-search"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
