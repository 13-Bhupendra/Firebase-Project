import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { store } from "../../firebase";


//* create and add a new chats
export const createAndAddNewChat = createAsyncThunk("chat/createchat" , async()=>{
    await setDoc(doc(store , "chatroom" , "admin@gmail.com") ,  {
        sender : "admin@gmail.com"
    })
    return sender
})

const initialState = {
    isLoading : true,
    error : null , 
    chat : []
}

const chatSlice = createSlice({
    name : "chats",
    initialState,
    reducers :{},
    extraReducers : (builder)=>{

        //! create and add new chats
        builder.addCase(createAndAddNewChat.pending , (state)=>{
            state.isLoading = true;
        })

        builder.addCase(createAndAddNewChat.fulfilled , (state , action)=>{
            console.log("chat created................" , action.payload)
        })
        
    }
})

export default chatSlice.reducer