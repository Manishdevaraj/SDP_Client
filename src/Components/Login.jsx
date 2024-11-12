import { Box, Button, FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { emailValidate, passwordValidate } from "./FormValidation"
import { useToast } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";

import { UsedbContext } from "../Services/DbContext";
function LoginPage() 
{  
  const {register, handleSubmit, formState: { errors}} = useForm()
  const toast = useToast()

  const {setIsLogin,google,SignIn,isLoading}=UsedbContext();

  const onsubmit = async (data) => {
    try {
      // setisLoading(true);
      await SignIn(data.email,data.password)
      // setisLoading(false);
      console.log(data)
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

              <Box className="flex flex-col ">
                   <Text className='text-4xl font-pmedium text-center text-custompink '>Login</Text>
                   <form onSubmit={handleSubmit(onsubmit)} className="mt-6">
            {/* Email */}
            <Box >
              <FormControl isInvalid={errors.email}>
                <Input
                  autoComplete="on"
                  type="email"
                  placeholder="Email"
                  _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                  border={'none'}
                  
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
                />
                <Box borderBottom={"1px solid black"}className="ml-4"  />

                <FormErrorMessage className="text-red-500">
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            {/* ---------google---icon----- */}
            <Box className="mt-6 flex flex-col items-center justify-center w-full">
               {/* <Box border={'1px solid gray '} className="w-full"/> */}
               <Text>OR</Text>
               {/* <Box border={'1px solid gray '} className="w-full"/> */}
              <Box className="mt-4" onClick={google} cursor={'pointer'}>
              <FcGoogle size={'30px'}/>
              </Box>
            </Box>
            {/* Submit Button */}
            <Box w="full" mt="20px">
              <Button
                width="full"
                type="submit"
                isLoading={isLoading}
                loadingText="Logging In"
                colorScheme="transparent"       
                className="w-full px-4 py-2 text-white rounded-lg bg-custompink hover:opacity-50"
              >
                Log In
              </Button>
            </Box>
            <Box className="mt-3 w-full">
              <Text className="text-lg text-center flex justify-center text-gray-600 font-psemibold">
                Don&apos;t have an account?<Text className="text-custompink hover:opacity-50" cursor="pointer" onClick={()=>setIsLogin(false)}>Sign Up</Text>
              </Text>
            </Box>
          </form>
              </Box>
              
        

         
        
      </Box>
    </>
  )
}

export default LoginPage
