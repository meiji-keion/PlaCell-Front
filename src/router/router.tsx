import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import EditLoginPage from "../components/pages/EditLoginPage";
import TopPage from "../components/pages/TopPage";
import Event from "../components/pages/desktop4";
import Edit from "../components/pages/desktop7";
import Enter from "../components/pages/desktop9";

export const Router =()=>{
    return(
    <Routes>
        <Route path ="/" element={<TopPage />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/editlogin" element={<EditLoginPage />} />
        <Route path ="/enter" element={<Enter />} />
        <Route path ="/event" element={<Event />} />
        <Route path ="/edit" element={<Edit />} />
    </Routes>
    )
}
export default Router;