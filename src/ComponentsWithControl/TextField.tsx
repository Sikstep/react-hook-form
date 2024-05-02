import React from 'react';
import {FieldValues, useController, UseControllerProps} from 'react-hook-form';
//
// type Props = {
//     onChange: ChangeHandler;
//     onBlur: ChangeHandler;
//     ref: RefCallBack;
//     name: string
// }

// type Props = ComponentPropsWithoutRef<'input'>

type Props<T extends FieldValues> = UseControllerProps<T>

const TextField = <T extends FieldValues>({name, control}: Props<T>) => {

    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })

    return (
        <div>
            <input
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default TextField;