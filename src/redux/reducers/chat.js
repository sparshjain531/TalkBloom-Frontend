import { createSlice } from "@reduxjs/toolkit"
import { getOrSaveFromStorage } from "../../lib/features";
import { NEW_MESSAGE_ALERT } from "../../constants/events";

const initialState={
    notificationCount: 0,
    newMessageAlert: getOrSaveFromStorage({key:NEW_MESSAGE_ALERT, get:true}) || [
        {
            chatId:"",
            count: 0,
        },
    ],
};

const chatSlice=createSlice({
    name:"chat",
    initialState,
    reducers:{
        incrementNotification:(state)=>{
            state.notificationCount += 1;
        },
        resetNotificationCount:(state)=>{
            state.notificationCount = 0;
        },
        setNewMessageAlert:(state,action)=>{

            const chatId=action.payload.chatId;
            const index=state.newMessageAlert.findIndex(
                (item)=>item.chatId===chatId
            );

            if(index!==-1){
                state.newMessageAlert[index].count+=1;
            }else{
                state.newMessageAlert.push({
                    chatId,
                    count: 1,
                })
            }
        },
        removeNewMessageAlert:(state,action)=>{
            state.newMessageAlert=state.newMessageAlert.filter(
                (item)=>item.chatId!==action.payload
            );
        }
    },
});

export default chatSlice;
export const {
    incrementNotification,
    resetNotificationCount,
    setNewMessageAlert,
    removeNewMessageAlert
}=chatSlice.actions;