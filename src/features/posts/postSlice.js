import { createSlice, nanoid } from "@reduxjs/toolkit";


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
        postAdd:{
            reducer (state,action){

                 // !!!!! n'est pas changer le state mais crée nouveau state 
                state.push(action.payload)
               
            },
            prepare (title,content,userId){
               
                return {
                    payload :{
                        id:nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})


export const selectAllPosts =(state)=>state.posts;

export const {postAdd}=postsSlice.actions

export default postsSlice.reducer