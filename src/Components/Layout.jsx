import { Box} from "@chakra-ui/react"
import Notification from "./Volunteers/Notification"
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Dashboard from "./Volunteers/Dashboard";
import EventsPage from "./Volunteers/Event";
import Profile from "./Volunteers/Profile";
import OrgProfile from "./Organisation/OrgProfile";
import OrgNotification from "./Organisation/OrgNotification";
import { UsedbContext } from "../Services/DbContext";
import Chatdrawer from "./ChatDrawer";
import { getUser } from "../Services/Api";
import Create_S_Post from "./Create_S_Post";
import Application from "./Organisation/Application";
import { io } from "socket.io-client";
import { socket } from "../Services/Socket";

function Layout() {
    const [isToggled, setIsToggled] = useState(false);
    const [isnotification,setisnotification] = useState(false);
    const [isChat,setisChat]=useState(false);
    const [isDash,setisDash]=useState(true);
    const [ispost,setispost]=useState(false);

    const [isprofile,setisprofile]=useState(false);

    const [createPost,setCreatePost]=useState(false);


    const {isVolunteer,user,setdbUser} = UsedbContext();
   
    // Fetching user Details

    useEffect(() => {
     
  
      socket.on('connect', () => {
        console.log('Socket connected');
      });
  
      // socket.on('disconnect', () => {
      //   console.log('Socket disconnected');
      // });
      socket.on('notification', (data) => {
        console.log(data);
      });
  
  
     
      
  
    
    }, []);


    useEffect(()=>
    {
      const getuser=async()=>
      {
        if(user)
        {
          
          const u= await getUser(user?.email);
          setdbUser(u);
        }
      }
      getuser();
    },[setdbUser, user])
    
    const onPostClick=()=>
    {
      setisDash(false);
      setispost(true);
      setisprofile(false);      

    }

    const onCreate_s_post=()=>
    {
      setIsToggled(!isToggled);
      setCreatePost(!createPost);
    }

    const onProfileClick=()=>
    {
      setisDash(false);
      setispost(false);
      setisprofile(true); 
      console.log('profile clic')
    }


    const onChatClick=()=>
    {
        setIsToggled(!isToggled);
        setisChat(!isChat);

    }

    const onnotificationClick=()=>
        {
          setIsToggled(!isToggled);
          setisnotification(!isnotification);
        }
        const onmainPageClick=()=>
          {
            if(isToggled&&( isnotification || isChat ||createPost ))
            {
            setIsToggled(false);
            setisnotification(false);
            setisChat(false);
            setCreatePost(false);
            }
          }
        const onhomeClick=()=>
        {
            setIsToggled(false);
            setisnotification(false);
            setisChat(false);
            setisDash(true);
            setispost(false);
            setisprofile(false);
        }
        console.log(isVolunteer)
  return (
    <>

  <Box className={`flex flex-col h-screen bg-slate-100 no-scrollbar ${isToggled ? 'blur-sm' : ''} `} onClick={onmainPageClick}>
        {/* side bar */}
         <Box className="w-full ml-0 no-scrollbar ">
              <Sidebar 
              onnotificationClick={onnotificationClick} 
              onChatClick={onChatClick}
              onPostClick={onPostClick}
              onProfileClick={onProfileClick}
              onhomeClick={onhomeClick}
               />
         </Box>
         {/* -----Dashboard----- */}
         <Box className="w-full  overflow-auto no-scrollbar ">
          {isDash&&<Dashboard  onCreate_s_post={ onCreate_s_post} />}
          {ispost&&<Application/>}
          {isprofile&&<Profile/>}     
         </Box>    
  </Box>
  
    {isnotification&&<Box className="absolute top-5 w-6/12 ml-80 h-[600px] mt-6 rounded-[50px] shadow-lg bg-slate-100" >

    <Notification/>

    </Box>}
    {isChat&& <Box className="bg-white  absolute top-5 w-4/12 ml-96 h-[600px] mt-6 rounded-[50px] shadow-lg" >

     <Chatdrawer/>

    </Box>}

    {createPost&&<Box className="bg-white  absolute top-5 w-4/12 ml-96 h-[600px] mt-6 rounded-[50px] shadow-lg" >
        <Create_S_Post onCreate_s_post={onCreate_s_post}/>
   </Box>}
    </>
  )
}

export default Layout