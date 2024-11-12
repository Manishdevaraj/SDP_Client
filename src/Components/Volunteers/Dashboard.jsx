import { Avatar, Box,Button,Image,Input,Text } from "@chakra-ui/react"
import CountUp from 'react-countup';
import { MdOutlinePermMedia } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiRepost } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { GetPost, getUserById } from "../../Services/Api";
import { formatRelativeTime } from "../../Services/Time";
import ReactPlayer from "react-player";
import { UsedbContext } from "../../Services/DbContext";
import { socket } from "../../Services/Socket";
function Dashboard({onCreate_s_post}) {
     
      const [Posts,setPosts]=useState([]);

      const {dbUser}=UsedbContext();

      if(dbUser)
      {
        socket.emit('user_online', dbUser.id);
      }
      

        useEffect(()=>
        {
           const getPost=async()=>
           {
            const post=await GetPost();
           const updatedpost= await Promise.all(
            post.map(async(item) => {

              // console.log(item);
             const user= await getUserById(item.userid);

             item.avatar=user.avatar;
             item.name=user.name;

             return item;
              
            })
          )
            setPosts(updatedpost);
           }
           getPost();
        },[])

    const videoref=useRef();
    
  
  return (
    <>

     <Box className="w-full h-[93vh] flex p-4 gap-4 ">
       {/* l1 */}
      <Box className="w-3/12 flex gap-3 flex-col">
        {/* ---------profile banner----- */}
        <Box className="w-full h-[50vh] shadow-xl ">
          {/* -----------banner and image----- */}
            <Box
              bgImage="url('/public/b1.webp')"
              bgSize="cover"
              bgPosition="center"  
              className="w-full h-20"/>

              <Box className="absolute top-24 left-36">
                  <Avatar size={'xl'} src={dbUser?.avatar}/>
              </Box>
              {/* --------------username and slogan--- */}
              <Box >
                  <Text fontSize={'2xl'} className="mt-14 font-pextralight text-center">{dbUser?.name}</Text>
                  <Text fontSize={'1xl'} className="font-pextralight text-center">✨ Volunteering: A Pathway to Purpose ✨</Text>
              </Box>
                 {/* /------------  folowing and followers--- */}
              <Box className="flex items-center justify-center mt-10 gap-5">
                    <Box className="flex flex-col items-center">
                        <CountUp start={0} end={6000} duration={2.75} separator="," >
                            {({ countUpRef }) => (
                              <Text fontSize={'3xl'} className="font-bold" ref={countUpRef} />
                            )}
                        </CountUp>
                        <Text fontSize={'xl'} className="font-pextralight text-center">Following</Text>
                    </Box>

                    <Box className="flex flex-col items-center">
                        <CountUp start={0} end={2000} duration={2.75} separator="," >
                            {({ countUpRef }) => (
                              <Text fontSize={'3xl'} className="font-bold" ref={countUpRef} />
                            )}
                        </CountUp>
                        <Text fontSize={'xl'} className="font-pextralight text-center">Followers</Text>
                    </Box>
              </Box>
              <Box className="flex justify-center mt-4 font-psemibold text-xl text-custompink" cursor={'pointer'}>My Profile</Box>

        </Box>
        {/* -----------reqest to follow---- */}
        <Box className="w-full h-[50vh] shadow-xl p-2">
          <Text className="text-2xl font-psemibold">Requests</Text>
          <Box className="w-full mt-2 flex items-center hover:bg-gray-400 p-2 rounded-xl" >
              <Avatar/>
              <Text className="ml-2 font-pextralight text-xl">Manish Devaraj</Text>
              <Button className="ml-auto bg-custompink hover:opacity-50" colorScheme="transparent" >Follow</Button>
          </Box>
        </Box>
               
      </Box>
      {/* l2 */}
      <Box className="w-6/12 overflow-y-auto no-scrollbar">
        {/* -----------create a post------- */}
        <Box onClick={()=>onCreate_s_post()} className="flex flex-col shadow-lg rounded-lg p-4 gap-1">
          {/* --------------header--------- */}
           <Box className="flex gap-3">
            <Avatar src={dbUser?.avatar} size={'md'}/>
          
           <Box className="w-full" cursor={'pointer'}>
              <Input borderRadius={"200px"}
               _focus={{ boxShadow: 'none',outline: 'none'}}
               placeholder="What's on your mind?"
              width={"500px"}
                // disabled={true}
                cursor={'pointer'}
              />
           </Box>
           </Box>
           {/* ----------------footer------- */}
           <Box className="flex gap-3 justify-center">
               <Button className="flex items-center">
                  <MdOutlinePermMedia />
                  <Text>media</Text>
                </Button>
               <Button>
                <MdEvent/>
                <Text>event</Text>
               </Button>
               <Button>
                <MdArticle/>
                <Text>article</Text>
                </Button>
           </Box>

        </Box>
        {/* --------------Post------------ */}
        {Posts.map((item,index)=>(

              <Box className=" mt-4 flex flex-col flex-grow gap-2
              p-2 w-full rounded-lg shadow-lg bg-white" key={index}>
                          {/* ----head---- */}
                                <Box className="flex items-center gap-1">
                                    <Avatar src={item.avatar} name={item.name}/>
                                    <Box>
                                      <Text className="font-pblack text-gray-900">{item.name}</Text>
                                      <Text className="font-pregular text-gray-100">{formatRelativeTime(Number(item?.time))}</Text>
                                    </Box>
                                      <Button className="ml-auto bg-custompink hover:opacity-50" colorScheme="transparent" >Follow</Button>   
                                </Box>
                                {/* --------body------ */}
                                <Box className="p-3">

                                  <Text>{item?.msg}</Text>

                                  {item.type==="image"&&
                                  <Image src={item.url} width={'full'} h={'full'} className="mt-3"/>}

                                  {item.type==="video"&&
                                  <ReactPlayer url={item.url}  ref={videoref}
                                  controls={true} 
                                   />}

                                  
                                </Box>
                                {/* ---------footer---------- */}
                                <Box className="flex mt-2 justify-center gap-28">
                                    <AiOutlineLike size={'30px'} color="red" />
                                    {/* like */}
                                    {/* comment */}
                                    <TfiCommentAlt size={'30px'} color="red"/>
                                    {/* repost */}
                                    <BiRepost size={'30px'} color="red"/>
                                    {/* Share */}
                                    <IoIosShareAlt size={'30px'} color="red"/>
                                </Box>
                                
                </Box>      

        ))}
        
            
        
          

      </Box>
      {/* l3 */}
      <Box className="w-4/12 shadow-xl p-4">
        
        <Text className="text-2xl font-psemibold">Treanding For you</Text>
        <Text className="text-2xl font-psemibold">Applications For You</Text>
        
      </Box>

     
      </Box> 
    </>
  )
}

export default Dashboard