import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import s from './CheckBoxRadix.module.css';
import {CheckIcon} from '@radix-ui/react-icons';
import {Control, useController} from 'react-hook-form';
import {Inputs} from '../App';

type CheckBoxTypes={
    rememberMe:boolean,
    checked:boolean
}


type Props={
    control: Control<Inputs>
    name:"rememberMe"
}


export const CheckBoxRadix = ({name, control}: Props) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        defaultValue:false

    })
    return (
        <form>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox.Root
                    className={s.CheckboxRoot}
                    // defaultChecked id="c1"
                    checked={value}
                    onCheckedChange={onChange}
                >
                    <Checkbox.Indicator className={s.CheckboxIndicator}>
                        <CheckIcon/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={s.Label} htmlFor="c1">
                    Accept terms and conditions.
                </label>
            </div>
        </form>
    );
}