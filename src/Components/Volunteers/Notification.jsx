import { Avatar, Box, Button, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { BiMessageRoundedX } from "react-icons/bi";
import { Get_v_Notification, getUserById, org_v_Notification, Status_Notification } from "../../Services/Api";
import { UsedbContext } from "../../Services/DbContext";
import { CiClock2 } from "react-icons/ci";
function Notification() {

        const {dbUser,isVolunteer}=UsedbContext();
        const [notification,setnotification]=useState([]);

     useEffect(()=>
    {
      const getallnotification=async()=>
      { 
        if(isVolunteer)
        {
          const notification=await Get_v_Notification(dbUser?.id);
          const updatesnotification=await Promise.all(
            notification.map(async(item)=>{

              const user= await getUserById(item.organizerid);
              item.avatar=user.avatar;
              item.name=user.name;
              return item;
            })
          );
          setnotification(updatesnotification);
        }
        else
        {     
          const notification=await org_v_Notification(dbUser?.id);
          const updatesnotification=await Promise.all(
            notification.map(async(item)=>{

              const user= await getUserById(item.volunteerid);
              item.avatar=user.avatar;
              item.name=user.name;
              return item;
            })
          );
          setnotification(updatesnotification);
        }
      }

      getallnotification();

    },[dbUser?.id, isVolunteer])   

    const onAccept=async(item)=>
    {
      await Status_Notification(item?.id,"Accepted");
    }
    const onReject=async(item)=>
    {
      await Status_Notification(item?.id,"Rejected");
        
    }
  return (
    <>
       <Box className="m-5 ">


            <Box className="flex flex-col">
               
                <Text className="text-center font-bold text-3xl text-custompink" >Notification</Text>    
            </Box>
            {notification?.map((item,index)=>
            (
                <Box key={index}> 
                 <Box className="flex items-center
                  ml-7 p-3 rounded-lg
                  hover:bg-gray-100
                  gap-5
                  ">
                      <Avatar src={item.avatar}/>
                      <Text className="text-1xl text-primary font-pmedium">{item.notifycontent}</Text>
                      {isVolunteer?
                      <Box className="ml-auto">
                        {item.notifytype==='Pending'?<CiClock2 size={'30px'} />
                        :
                        item.notifytype==='Accepted'?<BiSolidMessageRoundedCheck size={'30px'} color="green"/>:<BiMessageRoundedX size={'30px'} color="red"/>}
                      
                    </Box>:
                    (item.notifytype==='Pending'?
                     <Box className="ml-auto flex gap-3">
                           <Button colorScheme="green" onClick={()=>onAccept(item)}>Accept</Button>
                           <Button colorScheme="red" onClick={()=>onReject(item)}>Reject</Button>
                    </Box>:(item.notifytype==='Accepted'?
                    (<Box className="ml-auto flex gap-3">
                  
                      <BiSolidMessageRoundedCheck size={'30px'} color="green"/>
                      <Text>Approved</Text>
                    
                    </Box>):(<Box className="ml-auto flex gap-3">
                  
                    <BiMessageRoundedX size={'30px'} color="red"/>
                  <Text>Rejected</Text>
                
                </Box>)
                   ))}
                 </Box>
            </Box>  

            ))}
             
       </Box>
    </>
  )
}

export default Notification