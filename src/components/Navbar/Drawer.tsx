import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { DrawerProps } from "@/src/interfaces/api-interfaces";

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    "w-340px max-w-sm left-0 gg h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="px-4 py-4 flex items-center justify-between">

                        <div className="flex flex-shrink-0 items-center">
                            <h1 className="block h-10 w-20px lg:hidden text-white font-bold text-3xl">Web3Template</h1>
                        </div>

                        <XMarkIcon className="hover-spin block h-6 w-6 text-white" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
