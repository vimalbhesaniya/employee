import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import img from "../Images/home.jpg";
import style from "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import home from "../Style/home.module.css";
import Lottie from "lottie-react";
import Spinner from "../assets/Spinner";
import searchjson from "../assets/search.json";
import applications from "../assets/applications.json";
import send from "../assets/send.json";
import Check from "../Auth/check";

const Home = ({ setModell }) => {
  Check();
  const [data, setData] = useState("");
  const [spinner, setSpiner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpiner(false);
    }, 2000);
  }, [spinner]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const users = await fetch(
  //       "http://localhost:5500/users",
  //       {
  //         headers: {
  //           authorization: Cookies.get("token"),
  //         },
  //       },
  //       []
  //     );
  //     const data = await users.json();
  //     setData(data);
  //     if (data.unauthorized && !Cookies.get("logedwithgoogle")) {
  //       setModell(true);
  //     }
  //   };
  //   fetchUsers();
  // }, [null]);

  return (
    <>
      {/* {spinner && <Spinner />} */}
      <div className="home--">
        <section className={home.section1}>
          <header className={home.header}>
            <div className={home.contentLeft}>
              <div className={home.badge}>
                <span className={home.badgeChild1}>NEW</span>
                <span>stay connected to get upcoming jobs</span>
              </div>
              <span className={home.h1}>
                Fast and most existing jobs in india
              </span>
            </div>
            <div className={home.contentRight}>
              <img
                src={img}
                alt=""
                sizes="1"
                className={home.rightImage}
                srcset=""
              />
            </div>
          </header>
          <div className={home.cardsSection}>
            <div className={home.cardMain}>
              <div className={home.cards}>
                <p className={home.cardHeader}>
                  Unlock Your Potential: Find Your Dream Job Today!
                </p>
                <p className={home.cardPara}>
                  - Empower job seekers to discover fulfilling career
                  opportunities tailored to their skills and aspirations.
                </p>
                <div className={home.cardFooter}>
                  <Lottie
                    animationData={searchjson}
                    loop={true}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className={home.cards}>
                <p className={home.cardHeader}>
                  Your Gateway to Success: Explore Endless Career Possibilities!
                </p>
                <p className={home.cardPara}>
                  - Invite users to explore a diverse range of job listings and
                  take the first step towards achieving their professional
                  goals.
                </p>
                <div className={home.cardFooter}>
                  <Lottie
                    animationData={send}
                    loop={true}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className={home.cards}>
                <p className={home.cardHeader}>
                  Start Your Journey Here: Connect with Top Employers within
                  India!
                </p>
                <p className={home.cardPara}>
                  - Highlight the platform's capability to connect talented
                  individuals with leading companies, fostering mutually
                  beneficial career partnerships.
                </p>
                <div className={home.cardFooter}>
                  <Lottie
                    animationData={applications}
                    loop={true}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className={home.Image}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/slide3.jpg?alt=media&token=2624942b-ec71-4691-bac4-63fe483b5df7"
                className={home.img}
              />
            </div>
          </div>
        </section>
        <section className={home.section2}>
          <div className={home.header2}>
            <div className={home.contentLeft2}>
              <span className={home.h1}>Explore the letest jobs openings</span>
              <p className={home.openings}>
                Welcome to our job portal, where endless possibilities await
                you! We are thrilled to announce a plethora of new job openings
                across diverse industries and roles, all curated to match your
                unique skills and aspirations.
              </p>
            </div>
            <div className={home.contentRight2}>
              <button class={home.button}>
                See all jobs
                <div class={home.hoverEffect}>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
