let renderEntireTree = () => {
    console.log('hello');
}

let state = {
    profilePage: {
        postsData: [
            {id: 1, post: 'Hi, how are you ?', likesCount: 10},
            {id: 2, post: 'I okey !', likesCount: 12},
            {id: 3, post: 'Hello Wourld', likesCount: 129},
            {id: 4, post: 'Hello Planet', likesCount: 56},
            {id: 5, post: 'i love Js', likesCount: 56},
            {id: 6, post: 'React Coll', likesCount: 36}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Ilya'},
            {id: 5, name: 'Den'}, 
            {id: 6, name: 'Vika'}
        ],
        messagesData: [
            {id: 1, message: 'hello'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'Fine'},
            {id: 4, message: 'i lern React'}
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id:7,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;