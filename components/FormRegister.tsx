import { error } from 'console';
import React from 'react'
import {useForm , SubmitHandler} from 'react-hook-form'

export default function FormRegister() {

    const {register , handleSubmit , formState:{errors} , watch , setError} = useForm<User>();

    const password = watch('password' , '');

    const HandleSubmit:SubmitHandler<User> = (user:User) => {
        console.log({user});
    }

    const ValidatePassword:any = (value:any) => {
        if(value !== password){
            setError('re_password', {
                type:'validate',
                message:"Passwords not match"
            });
        }
    }
    return (
        <form onSubmit={handleSubmit(HandleSubmit)} className='w-full mx-auto lg:p-5 text-white font-bold text-sm'>
                    
            <label htmlFor="fullname">Full Name :</label>
            <input style={errors.full_name && {borderColor:"rgb(239, 68, 68)"}} id='fullname' {...register("full_name" , {required:true})} placeholder='full name' type="text" className={` placeholder:text-yellow-200 outline-none w-full p-2 border bg-yellow-300/30 border-yellow-200 rounded mb-1 ${errors.full_name && "placeholder:text-red-200 bg-red-500/30"}`} />

            <label htmlFor="phone">Phone :</label>
            <input style={errors.phone && {borderColor:"rgb(239, 68, 68)"}} id='phone' {...register("phone" , {required:true , pattern:/[0-9]{10}/})} placeholder='phone' type="tel" className={`placeholder:text-yellow-200 outline-none w-full p-2 border bg-yellow-300/30 border-yellow-200 rounded mb-1 ${errors.phone && "placeholder:text-red-200 bg-red-500/30"}`} />

            <label htmlFor="role">Role :</label>
            <select style={errors.role && {borderColor:"rgb(239, 68, 68)"}} {...register("role" , {required:true})} id="role" className={`bg-yellow-300 border border-yellow-300 text-black text-sm rounded-lg  block w-full p-2.5 dark:bg-yellow-400/90 dark:border-yellow-400 dark:placeholder-yellow-300 dark:text-white outline-none mb-1 ${errors.role && "placeholder:text-red-200 bg-red-500/30"}`}>
            <option defaultValue={"Choose Role"}>Choose Role</option>
            <option value="driver">Driver</option>
            <option value="passanger">Passanger</option>
            </select>


            <label htmlFor="password">Password :</label>
            <input  style={errors.password && {borderColor:"rgb(239, 68, 68)"}} id='password' {...register("password" ,{required:"Password must contain atleast 8 characters and one uppercase, lowercase, special character and one digit" , pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/})} placeholder='password' type="password" className={`placeholder:text-yellow-200 outline-none w-full p-2 border bg-yellow-300/30 border-yellow-200 rounded mb-1 ${errors.password && "placeholder:text-red-200 bg-red-500/30"}`} />
            <p className='text-xs mt-1 text-red-200'>{errors.password?.message}</p>

            <label htmlFor="re-type-Password">Re-type Password :</label>
            <input style={errors.re_password && {borderColor:"rgb(239, 68, 68)"}} id='re-type-Password' {...register("re_password" , {required:"Passswords not match" , validate:ValidatePassword})} placeholder='re-type Password' type="password" className={`placeholder:text-yellow-200 outline-none w-full p-2 border bg-yellow-300/30 border-yellow-200 rounded mb-1 ${errors.re_password && "placeholder:text-red-200 bg-red-500/30"}`} />
            <p className='text-xs mt-1 text-red-200'>{errors.re_password?.message}</p>

            <button className='w-full mt-3 p-3 bg-yellow-500 rounded uppercase'>Register</button>
        </form>
    )
}
