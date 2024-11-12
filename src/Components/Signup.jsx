import { Box, Button, FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { emailValidate, passwordValidate,usernameValidate } from "./FormValidation"
import { useToast } from '@chakra-ui/react'
import { UsedbContext } from "../Services/DbContext";
import NumberVerification from "./NumberVerification";
import { useState } from "react";
import { CreateUser } from "../Services/Api";

const Signup = () => {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const [isNumberVerification,setisNumberVerification] = useState(false);
  const [mobileNumber,setMobileNumber] = useState(null);
  const toast = useToast()

  const {isVolunteer,setIsLogin,SignUp,isLoading} = UsedbContext();

  const onsubmit = async (data) => {
    try {
     
     await SignUp(data.email,data.password);
      console.log(data)
      await CreateUser({
        name: data.username,
        email: data.email,
        phno: mobileNumber,
        password: data.password,
        role: isVolunteer?"volunteer":"organiser"
    });
    } catch (err) {
      console.log(err)
      toast({
        title: err.name,
        description: err.code,
        status: 'error',
        duration: 9000, 
        position: "top-right",
        isClosable: true,
      }) 
    }
  }
  
  return (
    <>
      <Box className="flex flex-col items-center">
         
              <Box
                bgImage="url('/public/logo2.png')"
                bgSize="cover"
                bgPosition="center"
                width="600px"
                height="100px"
                className="flex ml-5 mt-20"
              />

              {isNumberVerification&&<Box className="flex flex-col ">
                   <Text className='text-4xl font-pmedium text-center text-custompink '>SignUp</Text>
                   <form onSubmit={handleSubmit(onsubmit)} className="mt-6">
                    {/* ---Organization Name---- */}
             {!isVolunteer&&     
            <Box >
              <FormControl>
                <Input
                  autoComplete="on"
                  type="text"
                  placeholder="Organization Name"
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  border={'none'}
                  _invalid={{borderColor:'none'}}
                  {...register('organisingName')}
                  
                  // {...register('email', emailValidate)}
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />
                <FormErrorMessage className="text-red-500">
                  {/* {errors.email && errors.email.message} */}
                </FormErrorMessage>
              </FormControl>
            </Box>}

            {/* -------------------username-------------- */}
            <Box mt={'10px'}>
              <FormControl isInvalid={errors.username}>
                <Input
                  autoComplete="on"
                  type="text"
                  placeholder="User Name"
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  border={'none'}
                  _invalid={{borderColor:'none'}}
                  
                  {...register('username', usernameValidate)}
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />
                <FormErrorMessage className="text-red-500">
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
            </Box>


            {/* Email */}
            <Box  mt="10px" >
              <FormControl isInvalid={errors.email}>
                <Input
                  autoComplete="on"
                  type="email"
                  placeholder="Email"
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  border={'none'}
                  _invalid={{borderColor:'none'}}
                  
                  {...register('email', emailValidate)}
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />
                <FormErrorMessage className="text-red-500">
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            
            {/* Password */}
            <Box mt="10px">
              <FormControl isInvalid={errors.password}>
                <Input
                  autoComplete="on"
                  type="password"
                  placeholder="Password"
                  border={'none'}
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  {...register('password', passwordValidate)}
                  _invalid={{borderColor:'none'}}
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />

                <FormErrorMessage className="text-red-500">
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            
            {/* -------Website url------- */}
            <Box  mt="10px">
              <FormControl >
                <Input
                  autoComplete="on"
                  type="text"
                  placeholder="Website URL (optional) "
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  border={'none'}
                  _invalid={{borderColor:'none'}}
                  
                  {...register('websiteurl')}
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />
                <FormErrorMessage className="text-red-500">
                  {/* {errors.email && errors.email.message} */}
                </FormErrorMessage>
              </FormControl>
            </Box>
          

            
            {/* Submit Button */}
            <Box w="full" mt="20px">
              <Button
                width="full"
                type="submit"
                isLoading={isLoading}
                loadingText="Signing In"
                colorScheme="transparent"       
                className="w-full px-4 py-2 text-white rounded-lg bg-custompink hover:opacity-50"
              >
                Sign Up
              </Button>
            </Box>
            <Box className="mt-3 w-full">
              <Text className="text-lg text-center flex justify-center text-gray-600 font-psemibold">
              Already have an account?{' '}<Text className="text-custompink hover:opacity-50" cursor="pointer" onClick={()=>setIsLogin(true)}>Login</Text>
              </Text>
            </Box>
          </form>
           
              </Box>}
          <NumberVerification setisNumberVerification={setisNumberVerification}
          setMobileNumber={setMobileNumber}
          />
              
        

         
        
      </Box>
    </>
  );
};

export default Signup;