import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import EditLoginPage from "../components/pages/EditLoginPage";
import TopPage from "../components/pages/TopPage";
import Hyou from "../components/partsGroups/Timetable";
import Event from "../components/pages/desktop4";
import Edit from "../components/pages/desktop7";
import { Alert } from "@chakra-ui/react";
import Desktop11 from "../components/pages/Desktop11";

export const Router =()=>{
    return(
    <Routes>
        <Route path ="/" element={<TopPage />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/editlogin" element={<EditLoginPage />} />
        <Route path ="/plan" element={<Hyou />} />
        <Route path ="/event" element={<Event />} />
        <Route path ="/edit" element={<Edit />} />
        <Route path ="/alert" element={<Alert />} />
        <Route path ="/11" element={<Desktop11 />} />
    </Routes>
    )
}
export default Router;