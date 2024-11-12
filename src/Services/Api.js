import axios from 'axios'
// const url="http://172.19.57.47:5000"
const url="http://localhost:5000"

export const CreateUser=async(data)=>
{
    try
        {
            const res= await axios.post(`${url}/user/create`,data);
            console.log("CreateUser",res);        
        }
        catch(err)
        {
            console.log("Error while sending message",err)
        }

}

export const getUser=async(email)=>
{
    try
        {
            const res= await axios.get(`${url}/user/get`,
                {params:{ email:email}});
            console.log("getUser",res);   
            return res.data;     
        }
        catch(err)
        {
            console.log("Error while geting user",err)
        }

}
export const getUserById=async(id)=>
{
    try
        {
            const res= await axios.get(`${url}/user/getbyid`,
                {params:{ id:id}});
            console.log("getUserbyid",res);   
            return res.data;     
        }
        catch(err)
        {
            console.log("Error while sending message",err)
        }

}
export const UpdateProfile=async(data,id)=>
{
    try
        {
            const res= await axios.put(`${url}/profile/update`,data,
                {params:{ id:id}}
            );
            console.log("UpdateProfile",res);   
            return res.data;     
        }
        catch(err)
        {
            console.log("UpdateProfile",err)
        }

}
export const CreatePost=async(data)=>
{
    try
        {
            const res= await axios.post(`${url}/post/create`,data);
            console.log("CreatePost",res);   
            return res.data;     
        }
        catch(err)
        {
            console.log("Error while sending message",err)
        }

}
export const GetPost=async(data)=>
{
    try
        {
            const res= await axios.get(`${url}/post/getall`,data);
            console.log("GetPost",res);   
            return res.data;     
        }
        catch(err)
        {
            console.log("Error while sending message",err)
        }

}
export const updateAvatar = async (id, avatar) => {
    try {
        const res = await axios.put(`${url}/user/update/avatar`, null, {
            params: {
                id: id,
                avatar: avatar
            }
        });
        console.log("updateAvatar", res);   
        return res.data;     
    } catch (err) {
        console.log("Error while sending message", err);
    }
}
export const CreateApplication= async (data) => {
    try {
        const res = await axios.post(`${url}/application/create`,data);
        console.log("CreateApplication", res);   
        // return res.data;     
    } catch (err) {
        console.log("CreateApplication", err);
    }
}

export const GetApplication= async () => {
    try {
        const res = await axios.get(`${url}/application/getall`);
        console.log("GetApplication", res);   
        return res.data;     
    } catch (err) {
        console.log("GetApplication", err);
    }
}

export const CreateNotification= async (data) => {
    try {
        const res = await axios.post(`${url}/notify/create`,data);
        console.log("CreateNotification", res);   
        return res.data;     
    } catch (err) {
        console.log("CreateNotification", err);
    }
}
export const Get_v_Notification = async (id) => {
    try {
        const res = await axios.get(`${url}/notify/vol/get`,{
            params: {
                id: id,
            }
        });
        console.log("Get_v_Notification", res);   
        return res.data;     
    } catch (err) {
        console.log("Get_v_Notification", err);
    }
}
export const org_v_Notification = async (id) => {
    try {
        const res = await axios.get(`${url}/notify/org/get`,{
            params: {
                id: id,
            }
        });
        console.log("org_v_Notification ", res);   
        return res.data;     
    } catch (err) {
        console.log("org_v_Notification ", err);
    }
}
export const Status_Notification = async (id,status) => {
    try {
        const res = await axios.put(`${url}/notify/status`,null,{
            params: {
                id: id,
                status:status
            }
        });
        console.log("Status_Notification ", res);   
        return res.data;     
    } catch (err) {
        console.log("Status_Notification", err);
    }
}
export const Create_or_Get_Conversationid = async (user1,user2) => {
    try {
        const res = await axios.post(`${url}/conversation/create`,null,{
            params: {
                user1,
                user2
            }
        });
        console.log("Create_or_Get_Conversationid", res);   
        return res.data;     
    } catch (err) {
        console.log("Create_or_Get_Conversationid", err);
    }
}

export const SendMessage=async(data)=>
{
    try
        {
            const res= await axios.post(`${url}/chat/sendmessage`,data);
            console.log("msg",res);        
        }
        catch(err)
        {
            console.log("Error while sending message",err)
        }

}
export const GetMessage=async(id)=>
{
    try
        {
            const res= await axios.get(`${url}/chat/get/msg`,
                {params:{ conversationid: id }}
            );

            console.log("msg",res);        
            return res.data;
     
        }
        catch(err)
        {
            console.log("Error while geting message",err)
        }

}