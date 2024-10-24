"use client";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useLayoutEffect, useState } from "react";
import { Transaction, useGlobal } from "../globalState/Provider";

import '../css/incomes.css';
import { useToast } from "../components/toast/toastContext";
import formatter from "../utils/currencyFormatter";

export default function Income() {

    const [state,dispatch] = useGlobal();

    const [incomeList, setIncomeList] = useState<Transaction[]>([]);
    const toast = useToast();

    const handleDeleteTransaction = (_id: string) => {

        fetch(state.apiCore + 'api/deleteTransaction/' + _id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.key.accessKey
            },
        }).then(res => {
            if (res.status === 200) {
                res.json().then((data) => {
                    const newIncomeList = incomeList.filter((item) => item._id !== _id);
                    setIncomeList(newIncomeList);
                    toast?.open("Transaction deleted successfully", "success");
                    dispatch({
                        type: 'setTransactions',
                        payload: {
                            transactions: state.currentUser?.transactions?.filter((item: Transaction) => item._id !== _id) || [],
                            income: state.currentUser?.income ? state.currentUser.income - data.amount : 0,
                            expense: state.currentUser?.expense ? state.currentUser.expense : 0,
                        }
                    })
                })
            }
        })
    }

    useLayoutEffect(() => {
        setIncomeList(state.currentUser?.transactions?.filter((transaction: Transaction) => transaction.type === "Income") || []);
    }, [state.currentUser])

    return (
        <div className="h-full
        grow
        flex
        flex-col
        bg-[var(--background)]
        border-2
        border-[var(--border)]
        rounded-3xl
        p-4
        gap-4
    ">
            <div className="w-full h-auto text-[var(--primary-color)] text-3xl font-semibold">Incomes</div>
            <div className="w-full flex gap-4 items-center justify-center
        border-2 border-[var(--border)] rounded-xl
        p-4
        bg-[var(--highlight-background)]
        text-[var(--green)]">
                <p className="text-[var(--primary-color)] text-2xl font-semibold">Total incomes: </p>
                {" "}
                <p className=" text-2xl font-semibold">
                    {formatter.format(state?.currentUser?.income || 0)}
                </p>
            </div>
            <div className="
        incomeList
        w-full
        h-full
        gap-2
        flex
        flex-col
        overflow-scroll
        ">
                {incomeList.map((item, index) => {
                    return (
                        <div key={index} className="w-full flex gap-4 items-center justify-center bg-[var(--highlight-background)] border-2 border-[var(--border)] rounded-xl p-4">
                            <div className="border-2 border-[var(--reverse-text-color)] rounded-xl p-2">
                                <FaPlus color="var(--primary-color)" size={40} />
                            </div>
                            <div className="grow flex flex-col items-start justify-start">
                                <div className="flex gap-2 justify-center items-center">
                                    <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                                    <p className="text-[var(--primary-color)] text-lg font-semibold">{item.title}</p>
                                </div>
                                <div className="flex gap-4 justify-center items-center text-[var(--primary-color2)] text-md">
                                    <div>
                                        {item.amount} VNĐ
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <FaCalendar size={16} />{item.date.toString()}
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <FaCalendar size={16} />
                                        <p className="whitespace-nowrap text-ellipsis overflow-hidden max-w-[200px]">{item.ref}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 cursor-pointer" onClick={() => handleDeleteTransaction(item._id)}>
                                <FaTrashCan size={20} color="var(--delete)" />
                            </div>
                        </div>)
                })}
            </div>
        </div>)
}