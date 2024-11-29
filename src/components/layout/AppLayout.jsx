import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Drawer, Grid, Skeleton } from '@mui/material'
import ChatList from "../specific/ChatList"
import { useNavigate, useParams } from 'react-router-dom'
import Profile from '../specific/Profile'
import { useMyChatsQuery } from '../../redux/api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDeleteMenu, setIsMobile, setSelectedDeleteChat } from '../../redux/reducers/misc'
import { useErrors, useSocketEvents } from '../../hooks/Hook'
import { getSocket } from '../../Socket'
import { NEW_MESSAGE_ALERT, NEW_REQUEST, ONLINE_USERS, REFETCH_CHATS } from '../../constants/events'
import { incrementNotification, setNewMessageAlert } from '../../redux/reducers/chat'
import { getOrSaveFromStorage } from '../../lib/features'
import DeleteChatMenu from '../dialogs/DeleteChatMenu'

const AppLayout = () => WrappedComponent => {
    return (props) => {
        const params = useParams();
        const navigate = useNavigate();
        const chatId = params.chatId;
        const dispatch = useDispatch();

        const socket = getSocket();

        const deleteMenuAnchor = useRef(null);

        const [onlineUsers, setOnlineUsers] = useState([]);

        const { isMobile } = useSelector((state) => state.misc);
        const { user } = useSelector((state) => state.auth);
        const { newMessageAlert } = useSelector((state) => state.chat);

        const { isLoading, data, isError, error, refetch } = useMyChatsQuery("");

        useErrors([{ isError, error }]);

        useEffect(() => {
            getOrSaveFromStorage({ key: NEW_MESSAGE_ALERT, value: newMessageAlert });
        }, [newMessageAlert]);

        const handleDeleteChat = (e, chatId, groupChat) => {
            dispatch(setIsDeleteMenu(true));
            dispatch(setSelectedDeleteChat({ chatId, groupChat }));
            deleteMenuAnchor.current = e.currentTarget;
        }

        const handleMobileClose = () => dispatch(setIsMobile(false));

        const newMessageAlertListener = useCallback((data) => {
            if (data.chatId === chatId) return;
            dispatch(setNewMessageAlert(data));
        }, [chatId]);

        const newRequestListener = useCallback(() => {
            dispatch(incrementNotification())
        }, [dispatch]);

        const refetchListener = useCallback(() => {
            refetch();
            navigate("/")
        }, [refetch, navigate]);

        const onlineUsersListener = useCallback((data) => {
            setOnlineUsers(data);
          }, []);

        const eventHandlers = {
            [NEW_MESSAGE_ALERT]: newMessageAlertListener,
            [NEW_REQUEST]: newRequestListener,
            [REFETCH_CHATS]: refetchListener,
            [ONLINE_USERS]: onlineUsersListener,
        };

        useSocketEvents(socket, eventHandlers);

        return (
            <>
                <Title />
                <Header />

                <DeleteChatMenu dispatch={dispatch} deleteMenuAnchor={deleteMenuAnchor} />

                {isLoading ? (
                    <Skeleton />
                ) : (
                    <Drawer open={isMobile} onClose={handleMobileClose}>
                        <ChatList w='70vw' chats={data?.chats} chatId={chatId} handleDeleteChat={handleDeleteChat}
                            newMessagesAlert={newMessageAlert}
                            onlineUsers={onlineUsers}
                        />
                    </Drawer>
                )}

                <Grid container height={"calc(100vh - 4rem)"}>

                    <Grid item sm={4} md={3} sx={{
                        display: { xs: "none", sm: "block" },
                    }} height={"100%"} >
                        {isLoading ? (
                            <Skeleton />
                        ) : (
                            <ChatList chats={data?.chats} chatId={chatId} handleDeleteChat={handleDeleteChat} newMessagesAlert={newMessageAlert} onlineUsers={onlineUsers}
                            />
                        )
                        }
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
                        <WrappedComponent {...props} chatId={chatId} user={user} />
                    </Grid>

                    <Grid item md={4} lg={3} sx={{
                        display: { xs: "none", md: "block" },
                        padding: "2rem",
                        bgcolor: "rgba(0,0,0,0.85)",
                    }} height={"100%"} >
                        <Profile user={user} />
                    </Grid>
                </Grid>


            </>
        )
    }
}

export default AppLayout
