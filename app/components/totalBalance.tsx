"use client";

import { useEffect, useState } from "react";
import AwaitGetAPI from "../getAPI/awaitGetAPI";
import { useGlobal } from "../globalState/Provider";

export default function TotalBalance() {

    const [state, dispatch] = useGlobal();
    const [balance, setBalance] = useState<number>(0);

    const formatter = new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND',
      });

    const [color, setColor] = useState<string>("");

    useEffect(() => {
        setBalance(state?.currentUser?.money || 0);
        setColor(balance < 0 ? "text-[var(--delete)]" : "text-[var(--green)]");
    }, [state])

    return (
        <div className="border-2 relative border-[var(--border)] rounded-xl p-4 w-[50%] h-full bg-[var(--highlight-background)]">
            <div className="absolute top-2">
                <h3 className="text-2xl text-[var(--primary-color2)] font-bold">
                    Total balance
                </h3>
            </div>
            <div className={"grow h-full flex items-center justify-center text-xl " + color}>
                {formatter.format(balance)}
            </div>
        </div>
    )
}