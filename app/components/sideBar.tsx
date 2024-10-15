'use client';

import Image from "next/image";
import NavLink from "./navLink";
import avatar from '../public/assets/darkBg.jpg';
import ChangeTheme from "./changeTheme";

import { FaSignOutAlt } from "react-icons/fa";
import { FaChartLine, FaCreditCard, FaMoneyBillTrendUp, FaMoneyBillWave } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { useGlobal } from "../globalState/Provider";
import { GlobalState } from "../globalState/Provider";

import '../public/css/sidebar.css';

export default function SideBar(): JSX.Element {

    const [state, dispatch] = useGlobal();
    const [user, setUser] = useState<GlobalState["currentUser"]>({
        _id: 'some_id',
        username: 'some_username',
        name: 'John Doe',
        money: 0,
    });

    const navLinks = [
        { name: "Dashboard", path: "/", icon: FaChartLine },
        { name: "Transactions", path: '/transactions', icon: FaCreditCard },
        { name: "Incomes", path: "/incomes", icon: FaMoneyBillTrendUp },
        { name: "Expenses", path: "/expenses", icon: FaMoneyBillWave },
    ]

    const formatter = new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        if (state?.path) {
            const newActiveTab = document.querySelector(`.navLinks a[href="${state.path}"]`) as HTMLElement;
            const activeTab = document.querySelector(".active") as HTMLAnchorElement;
            const line = document.querySelector(".line") as HTMLElement;

            activeTab?.classList.remove("active");
            newActiveTab?.classList.add("active");

            if (line) {
                line.style.top = newActiveTab.offsetTop + (32 - 24) / 2 + "px";
                line.style.height = '24px';
                line.style.opacity = "1";
            }
        }
        if (state.currentUser) {
            setUser(state.currentUser);
        }
    }, [state])

    return (
        <div className="
        h-full
        w-1/5
        min-w-[250px]
        bg-[var(--background)]
        border-2
        border-[var(--border)]
        rounded-3xl
        px-4
        py-6
        font-bold
        flex
        flex-col
        gap-4
        justify-between
        ">
            <div className="flex gap-4 items-center">
                <div className="w-12 h-12
                    rounded-full
                    overflow-hidden 
                    border-2
                    border-[var(--border)] ">
                    <Image src={avatar} alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center grow">
                    <h3 className="text-[var(--primary-color)] text-lg font-bold">{user?.name || 'John Doe'}</h3>
                    <p className="text-[var(--primary-color3)] text-sm font-medium">{formatter.format(user?.money || 0)}</p>
                </div>
                <ChangeTheme />
            </div>
            <div className="h-full pt-4 text-md font-medium relative">
                <ul className="navLinks">
                    {navLinks.map((link) => (
                        <li key={link.name} onClick={() => dispatch({ type: "setPath", payload: link.path })} >
                            <NavLink href={link.path}>
                                <div className="w-full h-full flex items-center gap-2 pl-2 leading-8 hover:text-[var(--primary-color)]">
                                    {link.icon && <link.icon size={18} />}{link.name}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="w-[3px] bg-[var(--primary-color)] absolute line rounded-r-3xl">
                </div>
            </div>

            <div className="text-[var(--primary-color2)] cursor-pointer text-md font-medium flex gap-2 items-center hover:text-[var(--primary-color)]">
                <FaSignOutAlt size={18} />Sign out
            </div>
        </div>
    )
}