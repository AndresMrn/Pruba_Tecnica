import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext'
import { User } from "../models/user";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singUp, authenticated } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigation('/home-page')
        } else {
            navigation('/register')
        }
    }, [authenticated])

    const onSubmitForm = handleSubmit(async (values) => {
        const userValues: User = {
            name_estudent: values.name_estudent,
            username: values.username,
            email: values.email,
            password: values.password,
            role: values.role
        };
        singUp(userValues)

    })

    return (
        <>
            <section className="flex h-[calc(100vh-100px)] items-center justify-center mt-8">
                <article className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
                <article className="flex flex-row text-center justify-center gap-9">
                <Link to="/login" className="text-white text-2xl text-center mb-7  ">Login</Link>
                <Link to="/register" className="text-white text-2xl text-center mb-7 border-b-2 hover:border-green-blue hover:border-b-2 transition ease-in duration-100 ">Register</Link>
                </article>

                    <form onSubmit={onSubmitForm}>

                        <input type="text"
                            {...register("name_estudent",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md my-3"
                            placeholder="You need to input your full Name"
                        />
                        {errors.name_estudent && <p className="text-red-500 ">Name student required</p>}

                        <input type="text"
                            {...register("username",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md my-3"
                            placeholder="You need to input your username"
                        />
                        {errors.username && <p className="text-red-500 ">Username required</p>}
                        <input type="email"
                            {...register("email",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md my-3"
                            placeholder="You need to input your email"
                        />

                        {errors.email && <p className="text-red-500 ">Email required</p>}

                        <input type="password"
                            {...register("password",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md my-3"
                            placeholder="You need to input your password"
                        />
                        {errors.password && <p className="text-red-500 ">password required</p>}
                        <div className="flex flex-col  justify-center items-center">
                        <button type="submit" className="justify-center rounded-md bg-cornflower-blue w-80 p-4 my-8 transition ease-in duration-700 hover:border-transparent hover:text-white hover:bg-green-blue"> Register</button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}