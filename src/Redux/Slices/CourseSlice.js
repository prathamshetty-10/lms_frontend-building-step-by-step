import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-hot-toast";

const initialState={
    courseData:[],
}
export const getAllCourses=createAsyncThunk("/course/get",async()=>{
    try{
        const response=axiosInstance.get("/courses");
        toast.promise(response,{
            loading:"loading courses!! please wait !!",
            success:"courses loaded successfully",
            error:"failed to get courses,"
        });
        return(await response).data.courses;//check the course controller in server it returns response in json form uska course property we are returning
        //whatever u return here comes under action.payload

    }
    catch(error){
        toast.error(error?.response?.data?.message);
    }
})
const courseSlice=createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            if(action.payload){
                state.courseData=[...action.payload];
            }
        })
    },
});
export default courseSlice.reducer;