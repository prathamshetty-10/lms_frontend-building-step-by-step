import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";

const initialState={
    lectures:[],
}
export  const getCourseLectures=createAsyncThunk("/course/lecture/get",async(cid)=>{
    try{
        const response=axiosInstance.get(`/courses/${cid}`)
        toast.promise(response,{
            loading:"fetching lectures",
            success:"loaded lectures",
            error:"failed to load"
        })
        return (await response).data;
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
export  const addCourseLectures=createAsyncThunk("/course/lecture/add",async(data)=>{
    try{
        const formData=new FormData();
        formData.append("lecture",data.lecture);
        formData.append("title",data.title);
        formData.append("description",data.description);

        const response=axiosInstance.post(`/courses/${data.id}`,formData)
        toast.promise(response,{
            loading:"adding lectures",
            success:"added lectures",
            error:"failed to add"
        })
        return (await response).data;
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
export  const deleteCourseLectures=createAsyncThunk("/course/lecture/delete",async(data)=>{
    try{
        const response=axiosInstance.delete(`/courses/${data.courseId}/lectures/${data.lectureId}`)//this is how to give data for params
        toast.promise(response,{
            loading:"deleting lectures",
            success:"deleted lectures",
            error:"failed to delete"
        })
        return (await response).data;
    }
    catch(error){
        toast.error(error?.response?.data?.message)
    }
})
const lectureSlice=createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCourseLectures.fulfilled,(state,action)=>{
            state.lectures=action?.payload?.lectures;
        
        })
        .addCase(addCourseLectures.fulfilled,(state,action)=>{
            state.lectures=action?.payload?.course?.lectures;
        })


    }
});
export default lectureSlice.reducer