let GET_NOTES_ITEMS = 'GET_NOTES_ITEMS';

let initialState = {
    notesItems: [],
}


const notebooksDataReducer = (state = initialState, action) => {
    if (action.type === GET_NOTES_ITEMS) {
        return {
            ...state,
            notesItems: [...action.notes],
        }
    }
    return state;
}

export let setNotesItemsAC = (notes) => ({
    type: GET_NOTES_ITEMS, notes
})

export default notebooksDataReducer;