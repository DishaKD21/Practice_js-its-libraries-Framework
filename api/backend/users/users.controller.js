import * as service from './users.service.js';

export const getAllUser=async(req,res)=>{
try{
    const result = await service.getAllUser();
    if(!result){
        throw new Error("not getting result");
    }
    res.status(200).json(result);
}
catch(error){
    res.status(500).json({
        message: error.message
    });
}}
export const getUserById = async(req,res)=>{
try{
    const id = req.params.id;
    if(!id)throw new Error('id required');
    const result = await service.getUserById(id);
    if(!result){
        throw new Error("not getting result");
    }
    res.status(200).json(result);
}
catch(error){
   res.status(500).json({
        message: error.message
    });
}
}
export const createUserById = async(req,res)=>{
try{
    const data = req.body;
    if(!data || Object.keys(data).length === 0)throw new Error('body required');
    const result = await service.createUserById(data);
    if(!result){
        throw new Error("not getting result");
    }
    res.status(200).json(result);
}
catch(error){
    console.log(error);

    res.status(500).json({
        message: error.message
    });
}
}
export const updateUserById = async(req,res)=>{
try{
    const id = req.params.id;
    const data = req.body;
    if(!id) throw new Error('id is required');
    if(!data || Object.keys(data).length === 0) throw new Error('body required');
    const result = await service.updateUserById(id,data);
    if(!result){
        throw new Error("not getting result");
    }
    res.status(200).json(result);
}
catch(error){
     res.status(500).json({
        message: error.message
    });
}
}
export const deleteUserById = async(req,res)=>{
try{
    const id = req.params.id;
    if(!id) throw new Error('id is required');
    const result = await service.deleteUserById(id);
    if(!result){
        throw new Error("not getting result");
    }
    res.status(200).json(result);
}
catch(error){
    res.status(500).json({
        message: error.message
    });
}
}