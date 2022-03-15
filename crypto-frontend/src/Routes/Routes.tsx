import {Routes,
Route,
} from "react-router-dom";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";

const RouteR =()=> {
    return (
        <>
        <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
        </Routes>
      </>
    )
}

export default RouteR; 
