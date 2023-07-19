import {createSlice} from '@reduxjs/toolkit'
const initialState={
    value: false,
}
export const loginslicer = createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        settrue: (state)=>{
            state.value = true
        },
        setfalse: (state)=> {
            state.value= false
        },
    },
})
export const {settrue, setfalse} = loginslicer.actions
export default loginslicer.reducer