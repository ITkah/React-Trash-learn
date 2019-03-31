const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postsData: [
            {id: 1, post: 'Hi, how are you ?', likesCount: 10},
            {id: 2, post: 'I okey !', likesCount: 12},
            {id: 3, post: 'Hello Wourld', likesCount: 129},
            {id: 4, post: 'Hello Planet', likesCount: 56},
            {id: 5, post: 'i love Js', likesCount: 56},
            {id: 6, post: 'React Coll', likesCount: 36}
        ],
        newPostText: ''
}  

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id:7,
                post: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    default:
        return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})

export const updateNewPostTextCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;