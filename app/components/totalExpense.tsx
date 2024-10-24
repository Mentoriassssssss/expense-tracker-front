"use client";

import AwaitGetAPI from "../getAPI/awaitGetAPI";
import { useGlobal } from "../globalState/Provider";

export default function TotalExpense() {
    const formatter = new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND',
    });

    const [state, dispatch] = useGlobal();

    return (
        <div className="border-2 relative border-[var(--border)] rounded-xl p-4 bg-[var(--highlight-background)]">
            <div className="absolute top-2">
                <h3 className="text-2xl text-[var(--primary-color2)] font-bold">
                    Total expenses
                </h3>
            </div>
            <div className="grow h-full flex items-center justify-center text-xl text-[var(--delete)]">
                {formatter.format(state?.currentUser?.expense || 0) }
            </div>
        </div>
    )
}