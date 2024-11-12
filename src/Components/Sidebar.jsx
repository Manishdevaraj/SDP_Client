import { Avatar, Box,  Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react"
import PropTypes from 'prop-types';
import { UsedbContext } from "../Services/DbContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsMenuAppFill } from "react-icons/bs";
import { IoIosNotifications, IoMdLogOut } from "react-icons/io";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
function Sidebar({onnotificationClick,onChatClick,onProfileClick,onPostClick,onhomeClick}) {
  const {logout,dbUser}=UsedbContext();
  return (
    <>
    <Box className="w-full flex items-center justify-between bg-slate-200">
          {/* -----------logo------ */}
            <Box
                bgImage="url('/public/Logo.png')"
                bgSize="cover"
                bgPosition="center"
                
                className="flex w-[200px] h-10  ml-24"
              />
              {/*-------menu-------  */}

              <Box className="flex items-center ">
                  <Box className="mr-14 flex flex-col items-center" cursor={'pointer'} onClick={onhomeClick}>
                        <IoHome className="text-custompink text-xl" /> 
                        <Text className="font-pblack">Home</Text> 
                  </Box>
                  <Box  className="mr-14 flex flex-col items-center" cursor={'pointer'} onClick={onPostClick}>
                        <BsMenuAppFill  className="text-custompink text-xl" /> 
                        <Text className="font-pblack">Applications</Text> 
                  </Box>
                  <Box  className="mr-14 flex flex-col items-center" cursor={'pointer'} onClick={onnotificationClick}>
                        <IoIosNotifications  className="text-custompink text-2xl" /> 
                        <Text className="font-pblack">Notification</Text> 
                  </Box>
                  <Box  className="mr-14 flex flex-col items-center" cursor={'pointer'} onClick={onChatClick}>
                        <BsChatLeftDotsFill  className="text-custompink text-xl" /> 
                        <Text className="font-pblack"
                        >Messaging</Text> 
                  </Box>
                  <Box  className="mr-14 flex  items-center" cursor={'pointer'}>
                         <Avatar src={dbUser?.avatar} /> 
                        <Menu>
                            <MenuButton className="flex items-center" >
                               <IoMdArrowDropdown/>
                               {/* <Text>me</Text> */}
                            </MenuButton>
                            <MenuList>
                              <MenuItem onClick={()=>logout()}><IoMdLogOut size={'30px'} className="text-custompink"/>
                              <Text className="font-mono ">LogOut</Text>
</MenuItem>                   
                              <MenuItem onClick={onProfileClick}>
                              <Text className="font-mono ">Profile</Text>
</MenuItem>                   
                             
                            </MenuList>
                          </Menu>
                  </Box>

              </Box>
              
    </Box>

              
          
    
    </>
  )
}
Sidebar.propTypes = {
  onnotificationClick: PropTypes.func.isRequired,
  onChatClick: PropTypes.func.isRequired,
  onProfileClick: PropTypes.func.isRequired,
  onPostClick: PropTypes.func.isRequired,
  onhomeClick: PropTypes.func.isRequired,
};
export default Sidebar