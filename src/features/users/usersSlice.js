import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0',name:'ilyas'},
    {id:'1',name:'yassin'},
    {id:'2',name:'taha'},
]

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{},
})

export const selectAllUsers =(state)=>state.users;

export default usersSlice.reducer