const EDIT_DIOLOGS='EDIT-DIOLOGS'
const ADD_DIOLOGS='ADD-DIOLOGS'


let initialState={
    dialogs: [
        {id: 1, name: 'Sardor'},
        {id: 2, name: 'Dilshod'},
        {id: 3, name: 'Sanjar'},
        {id: 4, name: 'Avaz'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessage: '',
}

const diologsReducer=(state=initialState,action)=>{
    let stateCopy={
        ...state

    }
    if(action.type===EDIT_DIOLOGS){
        stateCopy.newMessage=action.text

    }
    if(action.type===ADD_DIOLOGS){

        stateCopy.messages.push({
            id:6,
            message:state.newMessage

        })
        stateCopy.newMessage=''


    }

    return stateCopy
}
export const editDialogsActionCreator = (text) => ({
    type: EDIT_DIOLOGS,
    text: text

})
export const addDialogsActionCreator = (text) => ({
    type: ADD_DIOLOGS,


})
export default diologsReducer