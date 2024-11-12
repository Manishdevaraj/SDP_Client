import { Box, Image } from "@chakra-ui/react"
import LoginPage from "../Components/Login"
import Signup from "../Components/Signup"
import { UsedbContext } from "../Services/DbContext"

function AuthPage() {

  const {isLogin} = UsedbContext();

  return (
    <>

    <Box className="w-full flex ">
           
            

       {isLogin&&<Image src='/public/Svg/undraw_secure_login_pdn4.svg' className="mt-14" />}
        {!isLogin&&<Image src='/public/Svg/undraw_access_account_re_8spm.svg'  w={'800px'} h={'600px'} className="mt-14" />}

         <Box>
           {isLogin&&<LoginPage/>}
           {!isLogin&&<Signup/>}
         </Box>     

    </Box>


    </>
  )
}

export default AuthPage