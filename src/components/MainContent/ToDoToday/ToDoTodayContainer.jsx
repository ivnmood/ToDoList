import React, {useEffect} from "react";
import ToDoToday from "./ToDoToday";
import {connect} from "react-redux";
import {getToDoList, updateTitle, updateCompleted, addItem, removeItem} from "../../../redux/todayReducer";


const ToDoTodayContainer = (props) => {
    useEffect(() => {
        getToDoList()
    }, [props.items])

    return (
        <ToDoToday items={props.items} updateTitle={props.updateTitle} updateCompleted={props.updateCompleted}
                   addItem={props.addItem} removeItem={props.removeItem}/>

    )
}

const mapStateToProps = (state) => {
    return ({
        items: state.TodayPage.items,
        title: state.TodayPage.items.title
    })

}


export default connect(mapStateToProps, {
    getToDoList,
    updateTitle,
    updateCompleted,
    addItem,
    removeItem
})(ToDoTodayContainer);