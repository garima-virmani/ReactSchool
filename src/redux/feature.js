import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 'qwdbhds',
  }

const slice = createSlice({
    name: 'operation',
    initialState,

    reducers: {
        setValue: (state, action)=>{
            state.value = action.payload;
        }
    }
})

export const { setValue } = slice.actions

export default slice.reducer