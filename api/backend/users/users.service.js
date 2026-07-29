import users from "./users.model.js";

export const getAllUser=async()=>{
 return users;
}
export const getUserById = async (id)=>{
 const result = users.find((user)=>{
     return user.id==id;
    } )
 return result;
}
export const createUserById = async(data)=>{
  users.push(data);
  return data;
}
export const updateUserById = async(id,data)=>{
  const index = users.findIndex((user)=>{
     return user.id == id;
    } )
   if (index == -1) return null;
  users.splice(index,1,data);
  return data;
}
export const deleteUserById = async(id)=>{
   const index = users.findIndex((user)=>{
     return user.id==id;
    } )
   if (index == -1) return false;
   users.splice(index,1);
   return true;
}