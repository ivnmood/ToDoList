import React, {useEffect, useState} from "react";
import {Button, Checkbox, Space} from 'antd';
import {Typography} from 'antd';
import s from "../ToDoToday/today.module.css"

const {Text} = Typography;

const ToDoItem = (props) => {

    let [title, setTitle] = useState(props.title)
    let [completed, setCompleted] = useState(props.completed)

    useEffect(() => {
            setTitle(props.title)
            setCompleted(props.completed)
        },
        [props.title, props.completed])


    const onTitleChange = (title) => {
        props.updateTitle(title, props.id)
    }

    const onItemCompleted = () => {

        props.updateCompleted(!completed, props.id)
    }

    const removeTask = () => {
        props.removeItem(props.id)
    }


    return (
        <div className={s.taskList}>
            <Space size={"large"}>
                <Checkbox onChange={onItemCompleted} defaultChecked={props.completed}/>
                {!completed &&
                <Text editable={{onChange: onTitleChange}}>
                    {title}
                </Text>}
                {completed &&
                <Text editable={{onChange: onTitleChange}} delete>
                    {title}
                </Text>}
                <Button danger onClick={removeTask}>Delete</Button>
            </Space>


        </div>

    )
}


export default ToDoItem;