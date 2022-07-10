let SET_TABLETS_ITEMS = 'SET_TABLETS_ITEMS';

let initialState = {
    tabletsItems: [],
}


const tabletsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLETS_ITEMS:
            return {
                ...state,
                tabletsItems: action.items
            }
        default: return state
    }
}

export let setTabletsItemsAC = items => ({
    type: SET_TABLETS_ITEMS, items,
})

export default tabletsDataReducer;