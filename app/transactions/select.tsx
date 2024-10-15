"use client";

import { useEffect } from "react";

export default function SelectDateandType() {

    useEffect(() => {
        const datePicker = document.getElementById("datePicker");
        if (datePicker) {
            (datePicker as HTMLInputElement).valueAsDate = new Date();
        }
    })

    return (
        <div className="w-full flex flex-col 2xl:flex-row gap-6">
        <input type="date"
                name="date"
                id="datePicker"
                placeholder="dd/mm/yyyy"
                className="
                2xl:flex-[3]
                flex-[1]
                border-2 border-[var(--border)]
                text-[var(--primary-color)]
                bg-[transparent]
                px-4
                py-2
                focus:outline-none
                focus:bg-[--highlight-background]
                rounded-lg"/>
        <select
            className="
                min-w-[120px]
                flex-[1]
                border-2 border-[var(--border)]
                text-[var(--primary-color3)]
                bg-[transparent]
                px-4
                py-2
                focus:outline-none
                focus:bg-[--highlight-background]
                rounded-lg"
            defaultValue={""}
            name="type"
            onChange={(e) => {
                e.target.dataset.chosen = e.target.value
            }}
        >
            <option className="text-black bg-[transparent]" hidden disabled value={""}>Select option</option>
            <option className="text-black bg-[transparent]" value={"Income"}>Income</option>
            <option className="text-black bg-[transparent]" value={"Expense"}>Expense</option>
        </select>
        </div>
    )
}