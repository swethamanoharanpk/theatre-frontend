import {createSlice} from '@reduxjs/toolkit'
const userInformation = createSlice({
    name:"userInfo",
    initialState:{
        login:null,
        adminLogin:null

    },
    reducers:{
        storeToken:(state,action)=>{
            console.log("111111",action.payload)
            state.login = action.payload

        },
        deleteToken:(state,action)=>{
            state.login = null
        },
        storeAdminToken:(state,action)=>{
            console.log("111111",action.payload)
            state.adminLogin = action.payload

        },
        deleteAdminToken:(state,action)=>{
            state.adminLogin = null
        }

    }
})

export const {storeToken,deleteToken,storeAdminToken,deleteAdminToken} = userInformation.actions
export default userInformation.reducer