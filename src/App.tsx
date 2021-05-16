import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Components/Header/header-ui/Header";
import {Navbar} from "./Components/Navbar/navbar-ui/Navbar";
import {Profile} from './Components/Profile/profile-ui/Profile';
import {Settings} from "./Components/Settings/settings-ui/Settings";
import {Music} from "./Components/Music/music-ui/Music";
import {News} from "./Components/News/news-ui/News";
import {Dialogs} from "./Components/Dialogs/dialogs-ui/Dialogs";
import {DialogItemPropsType, MessagePropsType, onChangeMessageText, PostsPropsType} from "./redux/state";


type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostsPropsType>
            newPostText:string

        }
        dialogsPage: {
            messages: MessagePropsType[]
            dialogs: DialogItemPropsType[]
            newMessageText:string
        }
    }
    addPost:(postText:any)=>void
    changePostText:(postText:string)=>void
    addNewMessage:()=>void
    onChangeMessageText:(messageText:string)=>void
}

export const App = (props: AppPropsType) => {
console.log(props.state)

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage} changePostText={props.changePostText}  addPost={props.addPost}/>}/>
                <Route /*exact*/ path={'/dialogs'}
                                 render={() => <Dialogs   onChangeMessageText={props.onChangeMessageText} addNewMessage={props.addNewMessage} state={props.state.dialogsPage}/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
            </div>
        </div>
    )
}