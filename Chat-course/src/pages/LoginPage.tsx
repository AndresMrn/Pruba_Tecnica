import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../models";
import { useEffect } from "react";

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singIn, authenticated } = useAuth();

    const navigation = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigation('/home-page')
        } else {
            navigation('/login')
        }
    }, [authenticated])
    const loginSubmit = handleSubmit(async (values) => {
        const userValues: User = {

            email: values.email,
            password: values.password,
        };
        console.log(values)
        singIn(userValues)

    })

    return (
        <>
            <section className="flex h-[calc(100vh-100px)] items-center justify-center mt-8">

                <article className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
                <article className="flex flex-row text-center justify-center gap-9">
                <Link to="/login" className="text-white text-2xl text-center mb-7 border-b-2 hover:border-green-blue hover:border-b-2 transition ease-in duration-100 ">Login</Link>
                <Link to="/register" className="text-white text-2xl text-center mb-7 ">Register</Link>
                </article>

                    <form onSubmit={loginSubmit}>
                        {errors.email && <p className="text-red-500">Email required</p>}
                        <input type="email"
                            {...register("email",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md mb-5 "
                            placeholder="You need to input your email"
                        />


                        {errors.password && <p className="text-red-500 mt-4 ">Password required</p>}
                        <input type="password"
                            {...register("password",
                                { required: true })}
                            className="bg-zinc-700 w-full text-white px-4 py-2 rounded-md my-3 "
                            placeholder="You need to input your password"
                        />

                        <div className="flex flex-col  justify-center items-center">

                        <p className="flex gap-12 mt-6 justify-between text-white">
                            Don't have account <Link to="/register" className="font-bold">Sing Up</Link>
                        </p>

                            <button type="submit" className="justify-center rounded-md bg-cornflower-blue w-80 p-4 my-8 transition ease-in duration-700 hover:border-transparent hover:text-white hover:bg-green-blue"> Login</button>
                        </div>

  
                    </form>
                </article>
            </section>
        </>
    )
}