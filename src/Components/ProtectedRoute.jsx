
import { UsedbContext } from "../Services/DbContext";
import Layout from "./Layout";
import LandingPage from "../Pages/LandingPage";


function ProtectedRoute() {

    
    const {user}=UsedbContext();
    // console.log(user)
  

    return user?<Layout/>:<LandingPage/>
    
      
  
}



export default ProtectedRoute