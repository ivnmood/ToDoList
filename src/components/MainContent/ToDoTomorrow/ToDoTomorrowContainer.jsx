import React, {useEffect} from "react";
import ToDoToday from "../ToDoToday/ToDoToday";
import {connect} from "react-redux";
import {getToDoList, updateTitle, updateCompleted, addItem, removeItem} from "../../../redux/tomorrowReducer";


const ToDoTomorrowContainer = (props) => {
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
        items: state.TomorrowPage.items,
        title: state.TomorrowPage.items.title
    })

}


export default connect(mapStateToProps, {
    getToDoList,
    updateTitle,
    updateCompleted,
    addItem,
    removeItem
})(ToDoTomorrowContainer);