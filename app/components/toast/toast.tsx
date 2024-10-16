"use client";
import {useEffect, useMemo, useState} from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { ToastContext } from './toastContext';
import { AiOutlineExclamationCircle } from "react-icons/ai";

import '../../css/toast.css';

interface ToastProps {
    id: string;
    message: string;
    type: "success" | "error";
}

export default function Toast({id, message, type} : ToastProps) {

    useEffect(() => {
        const toast = document.getElementById(id);

        if (toast) {
            toast.classList.add('toastShowing');
        }
    })

    

    const color = type === 'success'? "var(--green)" : "var(--delete)";
    const bg = type === 'success'? "bg-[var(--green-bg)]" : "bg-[var(--red-bg)]";

    return (
        <div id = {id}
        className={'toast flex w-[350px] gap-4 p-4 items-center bottom-8 right-8 rounded-xl ' + ' ' + bg}>
            {type === "success"?
                <FaRegCheckCircle size={30} color={color}/> :
                <AiOutlineExclamationCircle size={30} color={color}/>
                }
            <div className={`text-[${color}] text-sm`}>
                <h3 className={`text-xl`}>{type === "success"? "Success" : "Error"}</h3>
                <p>{message}</p>
            </div>
        </div>
    )
}

interface ToastType {
    message: string;
    type: "success" | "error";
    id: string;
}

type ToastProviderProps = {
    children: React.ReactNode;
}

export function ToastProvider({children}: ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastType[]>([]);
    
    const openToast = (message: string, type: "success" | "error") => {
        const newToast = {
            id: Date.now().toString(),
            message: message,
            type: type,
        }
        setToasts((toasts) => [...toasts, newToast]);
        setTimeout(() => closeToast(newToast.id), 3000);
                
    }
    const closeToast = (id: string) => {
        const toast = document.getElementById(id);
        if (toast) {
            toast.style.animationName = "toastDisappear";
        }
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, 250);
    }

    const contextValue = useMemo(() => ({
        open: openToast,
    }), [openToast]);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <div className='absolute bottom-8 right-8 flex flex-col gap-4'>
            {toasts.map((toast) => {
                return (
                    <Toast
                        id={toast.id}
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                    />
                )
            })}
            </div>
        </ToastContext.Provider>
    )
}