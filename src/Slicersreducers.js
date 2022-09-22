import { createSlice } from "@reduxjs/toolkit";

const Slicersreducers=createSlice({
    name:"coloreleg",
    initialState:{
        color:""
    },    
    reducers:{
        coloractiv:(state,action)=>{
            state.color=action.payload;
        }
    }
});

export const { coloractiv }=Slicersreducers.actions;
export default Slicersreducers.reducer;