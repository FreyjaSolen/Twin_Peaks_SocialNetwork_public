import React, { useState } from 'react';
import style from './DescriptionForm.module.css';
import { useForm } from 'react-hook-form';
import Info from '../../common/Info/Info';

const DescriptionForm = (props) => {
    const { register, handleSubmit, setError, 
        formState: {
        errors
    } } = useForm()

    let [localMeDesc, setMeDesc] = useState(props.profile.aboutMe);
    let [localJobDesc, setJobDesc] = useState(props.profile.lookingForAJobDescription);
    let [localGit, setGit] = useState(props.profile.contacts.github);

    const onSubmit = (data) => {
        data.FullName = props.profile.fullName
        props.saveProfile(data, setError);
    }

    const onAboutMeChange = (event) => {
        setMeDesc(event.currentTarget.value);
    }
    const onJobChange = (event) => {
        setJobDesc(event.currentTarget.value);
    }
    const onGitChange = (event) => {
        setGit(event.currentTarget.value);
    }

    return (
        <div className={style.descFormWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.settingsContainer}>

                    <div className={style.block}>
                    <div className={style.description}>
                        Tell about yourself:
                    </div>
                    <div>
                        <input type='text'
                            {...register('AboutMe',
                            {
                                required: 'The field must not be empty'
                            })} 
                            onChange={onAboutMeChange}
                            value={localMeDesc}
                            className={style.inputText}/>
                            </div>
                            <div className={style.errors}>
                        <label>{errors?.AboutMe && errors?.AboutMe?.message}</label>
                    </div>
                    </div>

                    <div className={style.block}>
                    <div className={style.description}>
                        Your skills:
                    </div>
                        <input type='text'
                            {...register('lookingForAJobDescription',
                            {
                                required: 'The field must not be empty'
                            })}
                            onChange={onJobChange}
                            value={localJobDesc} 
                            className={style.inputText} />
                            <div className={style.errors}>
                        <label>{errors?.lookingForAJobDescription && errors?.lookingForAJobDescription?.message}</label>
                    </div>                   
                    </div>
                    
                    <div className={style.block}>
                    <div className={style.description}>
                        Loking for a job?
                    </div>
                    <input type={'checkbox'} 
                    {...register('lookingForAJob')} 
                    className={style.inputCheck}/>             
                    </div>
                    <div className={style.block}>
                    <div className={style.description}>
                    <b>Contacts:</b>
                    </div>
                    <input type='text'
                            {...register('contacts.github')}
                            onChange={onGitChange}
                            value={localGit} 
                            className={style.inputText} />
                    </div>
                    <div className={style.errors}>
                        <label>{errors?.server && errors?.server?.message}</label>
                    </div>    
                </div>
                <div className={style.buttonEnt}>
                    <button  type='submit'>Update info</button>
                </div>
            </form>
        </div>
    );
}

export default DescriptionForm;