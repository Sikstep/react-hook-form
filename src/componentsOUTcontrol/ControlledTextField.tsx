import React from 'react';
import TextField from './TextField';
import {FieldValues, useController, UseControllerProps} from 'react-hook-form';
//
// type Props = {
//     name: 'login' | 'password'
//     control: Control<Inputs>
// }


type Props<T extends FieldValues> = UseControllerProps<T>

const ControlledTextField = <T extends FieldValues>({name, control}: Props<T>) => {

    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })

    // Пример использования дженериков
    // const foo=<T extends number | string>(a:T)=>{
    //
    // }
    // foo(100200)
    // foo('100200')

    return (
        <TextField
            value={value}
            onChange={onChange}
            // {...register("login")}
        />
    );
};

export default ControlledTextField;