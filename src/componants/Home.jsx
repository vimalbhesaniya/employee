import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import img from "../Images/home.jpg";
import home from "../Style/home.module.css";
import Spinner from "../assets/Spinner";
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
      {spinner && <Spinner />}
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
          <div className={home.searchSection}>
            <div className={home.sliderBox}>
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/silde1.jpg?alt=media&token=7565cf9b-16e5-4129-abf1-9a7cf5bf3be5"
                }
                alt=""
                className={home.slideImage}
              />
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/slide2.jpg?alt=media&token=82b841c2-8dd2-422f-a3f5-4cb7bbe8a1ea"
                }
                alt=""
                className={home.slideImage}
              />
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/slide3.jpg?alt=media&token=2624942b-ec71-4691-bac4-63fe483b5df7"
                }
                alt=""
                className={home.slideImage}
              />
              <img
                src={
                  "https://assets.materialup.com/uploads/966e7e30-0faf-4a6c-8c3d-205bb27fb485/preview.jpg"
                }
                alt=""
                className={home.slideImage}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
