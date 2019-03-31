const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
      SEND_MESSAGE = 'SEND-MESSAGE';    

let initialState = {
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
    ],
    newMessageBody: ''
};


const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 7, message: body});
        return state;
        default: 
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})


export default dialogsReducer;