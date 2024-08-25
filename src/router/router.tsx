import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import EditLoginPage from "../components/pages/EditLoginPage";

export const Router =()=>{
    return(
    <Routes>
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/editlogin" element={<EditLoginPage />} />
    </Routes>
    )
}
export default Router;