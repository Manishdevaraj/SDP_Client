import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { Box, Button, Image,  Text } from '@chakra-ui/react';
import { UsedbContext } from '../Services/DbContext';


const LandingPage = () => {

  const navigate=useNavigate();
  const {isVolunteer,setisVolunteer,setIsLogin}=UsedbContext();

  return (
    <>

          <Box className='w-full'>
           <NavBar />
         </Box>
        <Box
          w="full"
          h="80vh"
          className='flex'
        >
          
         <Image src='/public/e2.avif'  width={'600px'} height={'640px'}
         />

          <Box className='w-full h-full mt-14 justify-center'>
                 {/* <Text className="text-4xl md:text-5xl font-pbold text-secondary-200 mb-4">{displayedText}</Text> */}
                 <Text className='text-4xl font-pmedium '>Join our vibrant community of dedicated volunteers and trusted recruiters!</Text>

                 <Box className=" mt-8 text-lg md:text-2xl text-center font-pmedium text-purple-600 mb-4 ">
                 Discover thousands of volunteer opportunities and organizational roles
          </Box>
          <Text className="text-lg md:text-xl text-gray-700 font-pmedium mb-4">
          Our platform ensures you find the perfect fit quickly and efficiently, making a positive impact together! Create your profile and connect with like-minded individuals.        
          </Text>
          <Box fontFamily={'cursive'} className='flex  gap-7  justify-center mt-8 '>
       
              <Button colorScheme='transparent' className='bg-custompink hover:opacity-50' 
                borderRadius={'200px'} onClick={()=>{
                  setisVolunteer(true);setIsLogin(false);navigate('/auth')}}
              >Volunteer</Button>
              <Button colorScheme='transparent' className='bg-custompink hover:opacity-50' borderRadius={'200px'} onClick={()=>{
                 setisVolunteer(false);setIsLogin(false);navigate('/auth')}}>Organiser</Button>
            </Box>
                 
          </Box>
         
        </Box>

       
    </>
  );
};

export default LandingPage;