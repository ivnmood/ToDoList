import {updateObjectInArrayTitle, updateObjectInArrayCompleted} from "../utils/objectHelpers";
import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    SET_TODO_LIST,
    UDPATE_COMPLETED,
    UDPATE_TODO_ITEM
} from "../utils/constants,js";


let initialState = {
    items: [
        {title: "Lorem ipsum dolor.", completed: false, id: 1543545},
        {title: "Earum harum, reiciendis?", completed: false, id: 2454352},
        {title: "Debitis, dolorem ratione?", completed: false, id: 3343456},
        {title: "Fuga, nemo reiciendis?", completed: false, id: 4535432345},
        {title: "Culpa modi, ratione.", completed: false, id: 5543564},
        {title: "Cupiditate, ipsum, magni.", completed: false, id: 34325465768},
        {title: "Impedit, provident, veniam.", completed: false, id: 798765434567},
        {title: "Alias, cumque, nobis.", completed: false, id: 84565434567876543}
    ]
};

const YesterdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST: {
            return {
                ...state,
                items: [...action.items]
            }
        }
        case ADD_TODO_ITEM: {
            const newItem = {
                title: action.title,
                completed: false,
                id: ((new Date()).getTime())
            }
            return {
                ...state,
                items: [...state.items, newItem],
            }
        }
        case REMOVE_TODO_ITEM: {
            return {items: state.items.filter(items => items.id !== action.id)}
        }
        case UDPATE_TODO_ITEM: {
            return {
                ...state,
                items: updateObjectInArrayTitle(state.items, action.id, "id", action.title)
            }
        }
        case UDPATE_COMPLETED: {
            return {
                ...state,
                items: updateObjectInArrayCompleted(state.items, action.id, "id", action.completed)
            }
        }
        default:
            return state;
    }
}
export const setToDoList = (items) => ({type: SET_TODO_LIST, items})
export const updateToDoTitle = (title, id) => ({type: UDPATE_TODO_ITEM, title, id})
export const updateToDoCompleted = (completed, id) => ({type: UDPATE_COMPLETED, completed, id})
export const addToDoItem = (title) => ({type: ADD_TODO_ITEM, title})
export const removeToDoItem = (id) => ({type: REMOVE_TODO_ITEM, id})


export const getToDoList = () => (dispatch) => {
    dispatch(setToDoList())
}

export const updateTitle = (title, id) => (dispatch) => {
    dispatch(updateToDoTitle(title, id))
}
export const updateCompleted = (completed, id) => (dispatch) => {
    dispatch(updateToDoCompleted(completed, id))
}
export const addItem = (title) => (dispatch) => {
    dispatch(addToDoItem(title))
}
export const removeItem = (id) => (dispatch) => {
    dispatch(removeToDoItem(id))
}


export default YesterdayReducer;