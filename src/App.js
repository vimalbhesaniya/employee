import React, { createContext, useCallback, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout";
import MyModel from "./componants/Common/MyModel";
import Home from "./componants/Common/Home";
import Cookies from "js-cookie";
import { useState } from "react";
import LoginMain from "./componants/login/LoginMain";
import Signup from "./componants/signup/Signup";
import NotFound from "./componants/Common/Notfound";
import Check from "./Auth/check";
import Nearbyusers from "./componants/Common/nearbyusers";
import Profile from "./componants/Common/profile";
import Search from "./componants/Common/search";
import Postajob from "./componants/Common/postajob";
import { Country, State, City } from "country-state-city";
import TermAndConditions from "./componants/Footers/TermAndConditions";
import GetHelp from "./componants/Footers/GetHelp";
import SearchSection from "./componants/Common/SearchSection";
import SavedJobsPage from "./componants/Common/SavedJobsPage";
import { ToastContainer } from "react-toastify";

const App = () => {
    const [modell, setModell] = useState(false);
    return (
        <>
            {modell ? <MyModel setModell={setModell}></MyModel> : ""}
                <BrowserRouter>
                <ToastContainer   limit={1}/>
                    <Routes>
                        <Route  element={<Layout />}>
                            <Route path="/home" element={<Home  setModell={setModell}/>} />
                            <Route path="/nearbyusers" element={<Nearbyusers />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/postajob" element={<Postajob />} />
                            <Route path="/saved" element={<SavedJobsPage />} />
                            <Route path="/search" element={<SearchSection />} />
                        </Route>
                        <Route path={"/login" } element={<LoginMain />} />
                        <Route path={"/signup" } element={<Signup />} />
                        <Route path={"/gethelp" } element={<GetHelp />} />
                        <Route path={"/termandconditions" } element={<TermAndConditions />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
        </>
    );
};
export default App;
