import React, { createContext, useCallback, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout";
import MyModel from "./componants/MyModel";
import Home from "./componants/Home";
import Cookies from "js-cookie";
import { useState } from "react";
import Login from "./componants/Login";
import Signup from "./componants/signup/Signup";
import NotFound from "./componants/Notfound";
import Check from "./Auth/check";
import Nearbyusers from "./componants/nearbyusers";
import Profile from "./componants/profile";
import Search from "./componants/search";
import Postajob from "./componants/postajob";
import { Country, State, City } from "country-state-city";
import TermAndConditions from "./componants/Footers/TermAndConditions";
import GetHelp from "./componants/Footers/GetHelp";
import SearchSection from "./componants/SearchSection";
import SavedJobsPage from "./componants/SavedJobsPage";

const App = () => {
    const [modell, setModell] = useState(false);
    return (
        <>
            {modell ? <MyModel setModell={setModell}></MyModel> : ""}
                <BrowserRouter>
                    <Routes>
                        <Route  element={<Layout />}>
                            <Route path="/home" element={<Home  setModell={setModell}/>} />
                            <Route path="/nearbyusers" element={<Nearbyusers />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/postajob" element={<Postajob />} />
                            <Route path="/saved" element={<SavedJobsPage />} />
                            <Route path="/search" element={<SearchSection />} />
                        </Route>
                        <Route path={"/login" } element={<Login />} />
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
