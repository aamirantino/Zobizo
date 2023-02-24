import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        isFatching:false,
        currentUser:null,
        isError:false,
        myModel:false,
        jobModal:false,
        detailsJobModal:false,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFatching=true
        },
        loginSuccess:(state,action)=>{
            state.isFatching=false
            state.currentUser=action.payload
            state.isError=false
        },
        loginFailed:(state)=>{
            state.isFatching=false
            state.isError=true
        },
        logoutSuccess:(state)=>{
            state.currentUser=null
        },
        setModel:(state)=>{
            state.myModel=!state.myModel
        },
        setJobModal:(state)=>{
          state.jobModal=!state.jobModal
        },
        setJobDetaialsModal:(state)=>{
          state.detailsJobModal=!state.detailsJobModal
        }
    }
})

export const {setModel,setJobModal,loginStart,loginSuccess,loginFailed,logoutSuccess,setJobDetaialsModal}=userSlice.actions
export default userSlice.reducer