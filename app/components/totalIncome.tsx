"use client";
import { useGlobal } from "../globalState/Provider";

export default function TotalIncome() {
    const formatter = new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND',
      });

    const [state, dispatch] = useGlobal();

    return (
        <div className="border-2 relative border-[var(--border)] rounded-xl p-4 bg-[var(--highlight-background)]">
        <div className="absolute top-2">
            <h3 className="text-2xl text-[var(--primary-color2)] font-bold">
                Total incomes
            </h3>
        </div>
        <div className="grow h-full flex items-center justify-center text-xl text-[var(--green)]">
            {formatter.format(state?.currentUser?.income || 0)}
        </div>
        </div>
    )
}