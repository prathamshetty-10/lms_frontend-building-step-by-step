import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";
//we storing the isloggedin role and data in the localstorage setitem and get item is used to set or get data from localstorage

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
export const login=createAsyncThunk("/auth/login",async(data)=>{
    try{
        const res=axiosInstance.post("user/login",data);//this is the route given in backend
        toast.promise(res,{
            loading:"wait! authentication in progress",
            success:(data)=>{
                return data?.data.message;
            },
            error:"Failed to login check credentials"
        });
        return (await res).data;


    }catch(error){
        toast.error(error?.response?.data?.message);//to send the error as alert message

    }
} )
export const logout=createAsyncThunk("/auth/logout",async()=>{
    try{
        const res=axiosInstance.get("user/logout");//this is the route given in backend
        toast.promise(res,{
            loading:"wait! Logging out",
            success:(data)=>{
                return data?.data.message;
            },
            error:"Failed to logout"
        });
        return (await res).data;
    }catch(error){
        toast.error(error?.response?.data?.message);//to send the error as alert message

    }
} )
//creating the Auth slice
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            //localstorage is updated so incase the app reloads initial state will be set with these
            //now update the current state as u didnt reload
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role;
        })
        //once logout has happens everything from localstorage remove and restore state
        .addCase(logout.fulfilled,(state)=>{//there is no action only state is updated
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role="";
        })
    }
})
//export const {}=authSlice.actions;
export default authSlice.reducer;