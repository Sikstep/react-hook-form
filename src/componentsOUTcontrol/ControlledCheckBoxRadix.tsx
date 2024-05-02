import React from 'react';
import TextField from './TextField';
import {FieldValues, useController, UseControllerProps} from 'react-hook-form';
import {CheckBoxRadix} from './CheckBoxRadix';



type Props<T extends FieldValues> = UseControllerProps<T>

const ControlledCheckBoxRadix = <T extends FieldValues>({name, control}: Props<T>) => {

    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })


    return (
        <CheckBoxRadix
            value={value}
            onChange={onChange}
        />
    );
};

export default ControlledCheckBoxRadix;