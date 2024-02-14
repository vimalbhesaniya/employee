import { React, CSSProperties } from "react";
import { RingLoader } from "react-spinners";


const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <RingLoader
          color={"#2C73D2"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
