import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user: ""|| null
}

const Redux = createSlice({
  name: "cbt",
  initialState,
  reducers: {
    createUser:((state:any, {payload}:any)=>{
        state.user=payload
    })
  }
});

export const {createUser} = Redux.actions

export default Redux.reducer