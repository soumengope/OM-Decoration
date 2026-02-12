import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User{
    _id:string,
    fullName:string,
    email:string,
    password:string,
    role:string
}

const initialState:{user:User|null} = {user:null};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<User>)=>{
            state.user = action.payload;
        },
        logoutUser:(state)=>{
            state.user = null;
        }
    }
})
export default userSlice.reducer;
export const {addUser, logoutUser} = userSlice.actions;