export type MessagePropsType = {
    id: number
    message: string
}


export type DialogItemPropsType = {
    id: number
    name: string
}


export type PostsPropsType = {
    id: number
    message: string
    likes: number
}

export type StateType = {
    profilePage: {
        posts: Array<PostsPropsType>
        newPostText: string

    }
    dialogsPage: {
        messages: MessagePropsType[]
        dialogs: DialogItemPropsType[]
        newMessageText: string
    }
}

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likes: 12},
                {id: 2, message: 'lalala', likes: 13},
                {id: 3, message: 'tralala', likes: 14},
                {id: 4, message: 'bombom', likes: 17},
                {id: 5, message: 'france', likes: 999},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'bye'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'how are u'},
                {id: 5, message: 'ok'}
            ],
            dialogs: [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Ignat'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Sasha'},
                {id: 7, name: 'Eugene'},
            ],
            newMessageText: 'ok'
        }
    } as StateType,
    getState (){
        return this._state
    },
    _callSubscriber() {
        console.log('a')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    addPost(postText: any) {
        this._state.profilePage.posts = [...this._state.profilePage.posts, {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
            message: postText,
            likes: 0
        }]
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    changePostText(postText: string) {
        this._state.profilePage.newPostText = postText
        this._callSubscriber()
        console.log(this._state.profilePage.newPostText)
    },
    addNewMessage() {
        this._state.dialogsPage.messages = [...this._state.dialogsPage.messages,
            {
                id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
                message: this._state.dialogsPage.newMessageText
            }]
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()

    },
    onChangeMessageText(messageText: string) {
        this._state.dialogsPage.newMessageText = messageText
        this._callSubscriber()
    },
}


//@ts-ignore
window.store = store



