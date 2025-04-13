import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Hero() {
    return (
        <section className="bg-black min-h-screen overflow-hidden">
            <div className='flex items-baseline cursor-pointer justify-center pt-20'>
            <RegisterLink>
                <h2 className='text-white hover:shadow hover:shadow-blue-200 flex flex-row justify-center align-center border px-3 p-2 rounded-full text-center border-white'>
                    See What's New
                </h2>
                </RegisterLink>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
                        Simplify Collaboration
                        <strong className="font-extrabold text-white sm:block">
                            with smarter documentation tools.
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed text-slate-200">
                        Create, share, and visualize ideas seamlessly with our all-in-one platform for teams.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <RegisterLink>
                            <span className="block w-60vh rounded bg-white text-black px-12 py-3 text-sm font-medium shadow transition hover:shadow hover:shadow-amber-50 hover:bg-blue-300 focus:outline-none focus:ring active:bg-red-500 sm:w-auto flex items-center justify-center gap-2">
                                Try now
                            </span>
                        </RegisterLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
