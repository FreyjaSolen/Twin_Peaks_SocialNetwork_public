import React from 'react';
import style from './MessageForm.module.css';
import { useForm } from 'react-hook-form';

const MessageForm = (props) => {
    const { register, handleSubmit, reset, formState:{
        errors
    } } = useForm()

    const onSubmit = (data) => {
        props.addMessage(data.newMsgText);
        reset();
    }

    return (
        <div className={style.messageFormWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea {...register('newMsgText', 
                    {required: 'Текст не должен быть пустым',
                        maxLength: {
                            value: 250,
                            message: 'Максимальная длина сообщения 250 символов'
                            }})} />
                </div>
                <div>
                <label>{errors?.newMsgText && errors?.newMsgText?.message}</label>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
}

export default MessageForm;