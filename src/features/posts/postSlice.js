import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    }
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdd(state,action){
            // state.push(action.payload) !!!!! n'est pas changer le state mais crée nouveau state 

        }
    }
})

export const selectAllPosts =(state)=>state.posts;

export const {postAdd}=postsSlice.actions

export default postsSlice.reducer