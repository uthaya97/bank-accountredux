import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fullname:" ",
    id:" ",
}
const customerSlice=createSlice({
    name:"customer",
    initialState,
    reducers:{
       fullname(state,action){
           state.fullname= action.payload.fullname
       } ,
       id(state,action){

       }
    }
})
export const {fullname,id}=customerSlice.actions
export default customerSlice.reducer