import Image from "next/image";
import Link from "next/link";
import avatar from '../public/assets/darkBg.jpg';
import ChangeTheme from "./changeTheme";

export default function SideBar() {
    return (
        <div className="
        h-full
        w-1/5
        min-w-60
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
                    <h3 className="text-[var(--primary-color)] text-lg font-bold">Name</h3>
                    <p className="text-[var(--primary-color3)] text-sm font-medium">Your money</p>
                </div>
            <ChangeTheme />
            </div>
            <div className="h-full pt-4 text-[var(--primary-color3)] text-md font-medium">
                <ul>
                    <li>Dashboard</li>
                    <li><Link href='/transactions' className="text-[var(--primary-color)]">View transactions</Link></li>
                    <li>Incomes</li>
                    <li>Expenses</li>
                </ul>
            </div>
            <div className="text-[var(--primary-color2)] text-md font-medium">
                Sign out
            </div>
        </div>
    )
}