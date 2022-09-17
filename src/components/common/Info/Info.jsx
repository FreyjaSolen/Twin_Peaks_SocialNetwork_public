import React, {useState} from 'react';
import style from './Info.module.css';

const Info = ({conTitle, conValue}) => {
    
    let [localValue, setDesc] = useState(conValue);

    const onMeChange = (event) => {
        setDesc(event.currentTarget.value);
    }

    return (
        <div className={style.infoWrapper}>
            <div><b>{conTitle}</b>: </div>
            {/* <input type='text'
                            {...register('aboutMe',
                            {
                                required: 'The field must not be empty'
                            })} 
                            onChange={onAboutMeChange}
                            value={localMeDesc}
                            className={style.inputText}/> */}
            <div><input type='text'
            onChange={onMeChange}
            value={localValue}
            /></div>
        </div>
    );
}

export default Info;