import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')|| false,
    role:localStorage.getItem("role")|| "",
    data:localStorage.getItem("data")||{}
};//this is the initial state of the Auth slice
export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
    try{
        const res=axiosInstance.post("user/register",data);//this is the route given in backend
        toast.promise(res,{
            loading:"wait! creating your account",
            success:(data)=>{
                return data?.data.message;
            },
            error:"Failed to create account"
        });
        return (await res).data;


    }catch(error){
        toast.error(error?.response?.data?.message);//to send the error as alert message

    }
})
//creating the Auth slice
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
})
//export const {}=authSlice.actions;
export default authSlice.reducer;