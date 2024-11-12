import { Box, Button } from '@chakra-ui/react';
import { UsedbContext } from '../Services/DbContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const{setIsLogin}=UsedbContext();
  return (
    <>

    <Box className='flex w-full h-16 justify-between items-center md:mt-4 '>

      {/* ---Logo--- */}
     
      <Box
        bgImage='url(/public/logo2.png)'
        bgSize='cover'
        bgPosition='center'
        width='600px'
        height='100%' 
      />
     
      {/* ----------Nav Links----- */}
      <Box fontFamily={'cursive'} className='flex  gap-7 text-2xl mr-8 text-primary md:ml-28 '>
       
        {/* <Button  colorScheme='transparent' className='bg-custompink hover:opacity-50'   
          borderRadius={'200px'}
        >Signup</Button> */}
        <Button  colorScheme='transparent' className='bg-custompink hover:opacity-50'  borderRadius={'200px'} onClick={()=>{navigate('/auth');setIsLogin(true)}} >Sign in</Button>
      </Box>
    </Box>

    </>
  );
};

export default NavBar;