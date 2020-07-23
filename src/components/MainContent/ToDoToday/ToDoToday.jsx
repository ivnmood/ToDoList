import React from "react";
import ToDoItem from "./ToDoItem";
import {Form, Field} from 'react-final-form'
import {
    TextField,
} from 'react-final-form-antd'
import s from "./today.module.css"


const ToDoToday = (props) => {
    const ToDoElement = props.items.map((i, index) => <ToDoItem title={i.title} completed={i.completed} id={i.id}
                                                                updateCompleted={props.updateCompleted} key={index}
                                                                updateTitle={props.updateTitle}
                                                                removeItem={props.removeItem}/>)


    const minLength = value => (value && value.length >= 3 ? undefined : `Should be greater than 3 letters`);

    const onSubmit = async value => {
        const title = value.tasktext
        props.addItem(title)
    }

    return (
        <div>
            <div>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit, pristine, submitting, form}) => (
                        <form
                            onSubmit={(event) => {
                                const promise = handleSubmit(event);
                                promise && promise.then(() => {
                                    form.reset();
                                })
                                return promise;
                            }}
                        >
                            <div className={s.enterDataTask}>
                                <div className={s.inputTask}>
                                    <Field name="tasktext" component={TextField}
                                           validate={minLength}
                                           placeholder="enter your task"/>
                                </div>

                                {({meta}) => (
                                    <div>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                                <button type="submit" disabled={submitting || pristine}
                                        className={s.addTaskButton}>
                                    Add task
                                </button>

                            </div>

                        </form>
                    )}
                />
            </div>

            {ToDoElement}
        </div>


    )
}


export default ToDoToday;