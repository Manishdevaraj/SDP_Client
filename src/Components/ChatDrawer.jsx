import { Avatar, Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ChatmsgDrawer from "./ChatmsgDrawer";
import { UsedbContext } from "../Services/DbContext";
import { Create_or_Get_Conversationid, getUserById } from "../Services/Api";



function Chatdrawer() {


    const [Chat,SetChat] =useState(false);
    const [msg,setmsg] = useState(false);

    const [Ocontact,setOcontact]=useState([]);

    const {dbUser}=UsedbContext();


 
    useEffect(()=>
    {
         const getContacts=async()=>
         {
              console.log(dbUser.onetoonechat)
              const updata1= await Promise.all(
                dbUser.onetoonechat.map(async(item) => {

                 
                 const user= await getUserById(item);
    
    
                 return user;
                  
         })
              );
              setOcontact(updata1);
              console.log(Ocontact);
         }
         getContacts();
    },[dbUser])

    const [reciverid,setreciverid]=useState();
    const [conversationid,setconversationid]=useState();

  const onchatclick=async(item)=>
  {

    setmsg(true);
    const res=await Create_or_Get_Conversationid(dbUser.id,item.id);
    setconversationid(res.id);
    setreciverid(item.id);


  }
  return (
    <>

           {!msg&& <Box className="m-5">


            <Box className="flex flex-col">
            
                <Text className="text-center font-bold text-3xl text-custompink" >Chats</Text>    
            </Box> 

            <Box className="flex justify-center gap-4 font-pmedium text-pink-500"
            cursor={'pointer'}>
                <Box onClick={()=>SetChat(false)}>
                    <Text>One-on-One</Text>
                   {!Chat&& <Box className="border-b-2"/>}
                </Box>
                <Box onClick={()=>SetChat(true)}>
                    <Text>Groups</Text>
                    {Chat&&<Box className="border-b-2"/>}
                </Box>

            </Box>
            {/* Chat?Groupitem: */}
            {(Ocontact).map((item,index)=>
            (
                <Box key={index} onClick={()=>onchatclick(item)}> 
                <Box className="flex items-center
                ml-7 p-3 rounded-lg
                hover:bg-gray-100
                gap-5
                ">
                    <Avatar src={item.avatar}/>
                    <Box className="flex items-center justify-between w-full">
                        <Text className="text-1xl font-pregular text-secondary-200">{item.name}</Text>
                        <Text className={`text-1xl `}>{item.role}</Text>
                    </Box>    
                    
                </Box>
            </Box>  

            ))}
            
            </Box>}

            {
                msg&&<ChatmsgDrawer reciverid={reciverid} conversationid={conversationid}/>
            }
                
    </>

  )
}

export default Chatdrawer
