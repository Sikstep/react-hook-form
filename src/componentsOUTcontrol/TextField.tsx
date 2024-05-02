import React, {forwardRef} from 'react';
import {ChangeHandler, RefCallBack} from 'react-hook-form';

type Props = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: string
}

const TextField =forwardRef<HTMLInputElement,Props> ((props, ref) => {

    const {onChange, onBlur, name} = props

    return (
        <div>
            <input onChange={onChange} ref={ref} name={name} onBlur={onBlur} />
            {/*{errors.login && <div style={{color:'red'}}>To short</div>}*/}
        </div>
    );
});

export default TextField;