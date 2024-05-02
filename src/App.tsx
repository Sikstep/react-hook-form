import {SubmitHandler, useForm} from 'react-hook-form';
import {CheckBoxRadix} from './ComponentsWithControl/CheckBoxRadix';
import TextField from './ComponentsWithControl/TextField';


export type Inputs = {
    login: string;
    password: string;
    rememberMe:boolean
};


export default function App() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data); // Выводим объект с ошибками
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name={'login'} control={control}/>
            <TextField name={'password'} control={control}/>
            <CheckBoxRadix name={'rememberMe'} control={control}/>
            <input type="submit"/>
        </form>
    );
}

//--------------------ControlledTextField & CheckBoxRadix-----------------------
// import {SubmitHandler, useController, useForm} from 'react-hook-form';
// import ControlledCheckBoxRadix from './componentsOUTcontrol/ControlledCheckBoxRadix';
// import ControlledTextField from './componentsOUTcontrol/ControlledTextField';
//
//
//
//
// export type Inputs = {
//     login: string;
//     password: string;
//     rememberMe:boolean
// };
//
// export default function App() {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//         control
//     } = useForm<Inputs>();
//
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log(data); // Выводим объект с ошибками
//     };
//
//     return (
//
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <ControlledTextField name={'login'} control={control}/>
//             <ControlledTextField name={'password'} control={control}/>
//             <ControlledCheckBoxRadix name={'rememberMe'} control={control}/>
//             <input type="submit"/>
//         </form>
//     );
// }



//------------------------------------------------------------------------------

// import {useForm, SubmitHandler, useController} from 'react-hook-form';
// import TextField from './components/TextField';
// import {CheckBoxRadix} from './components/CheckBoxRadix';
//
// type Inputs = {
//     login: string;
//     password: string;
//     rememberMe:boolean
// };
//
// export default function App() {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//         control
//     } = useForm<Inputs>();
//
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log(data); // Выводим объект с ошибками
//     };
//
//     return (
//
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {/*<div>*/}
//             {/*    /!*<input {...register("login", {minLength: 3})} />*!/*/}
//             {/*    /!*{errors.login && <div style={{color:'red'}}>To short</div>}*!/*/}
//             {/*</div>*/}
//             <TextField {...register("login")}/>
//
//             {/*<div>*/}
//             {/*    <input {...register("password", {minLength: 3})} />*/}
//             {/*    {errors.password && <div style={{color:'red'}}>To short</div>}*/}
//             {/*</div>*/}
//             <TextField {...register("password")}/>
//
//             <CheckBoxRadix value={value} onChange={onChange}/>
//
//             {/*<div>*/}
//             {/*    <input type="checkbox"  {...register("rememberMe", {required:true})}/>*/}
//             {/*    {errors.rememberMe && <span style={{color:'red'}}>Required!</span>}*/}
//             {/*</div>*/}
//
//             <input type="submit"/>
//         </form>
//     );
// }