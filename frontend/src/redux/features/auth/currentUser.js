import {createSlice} from "@reduxjs/toolkit";

const initialState={current:"h"}
const currentUser=createSlice({
   name:"currentUser",
   initialState,
   reducers:{
    setCurrent:(state,action)=>{
     state.current=action.payload;
    },
   
   }

})
export const {setCurrent}=currentUser.actions;
export default currentUser.reducer;
