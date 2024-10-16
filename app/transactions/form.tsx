'use client';
import { FaPlus } from "react-icons/fa";
import SelectDateandType from "./select";
import { useGlobal } from "../globalState/Provider";
import { useToast } from "../components/toast/toastContext";

const TransactionForm = () => {

    const [state,] = useGlobal();
    const toast = useToast();
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        fetch(state.apiCore + 'api/addTransaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.key.accessKey,
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        }).then(res => {
            if (res.status === 201) {
                form.reset();
                toast?.open("Transaction added successfully", "success");
            } else {
                res.json().then(data => {
                    toast?.open(data.error.message, "error");
                })
            }
        })
    }

    return (
        <form
            onSubmit={(event) => handleFormSubmit(event)} className="w-full gap-6 flex flex-col">
                <input type="text"
                placeholder="Title"
                name="title"
                className="w-full
                border-2 border-[var(--border)]
                bg-[transparent]
                px-4
                py-2
                focus:outline-none
                focus:bg-[--highlight-background]
                text-[var(--primary-color)]
                rounded-lg"/>
                <input type="number"
                placeholder="Amount"
                name="amount"
                className="w-full
                border-2 border-[var(--border)]
                bg-[transparent]
                px-4
                py-2
                focus:outline-none
                focus:bg-[--highlight-background]
                text-[var(--primary-color)]
                rounded-lg"/>
                <SelectDateandType />
                <textarea
                name="ref"
                placeholder="Add a reference"
                className="w-full h-[150px]
                border-2 border-[var(--border)]
                text-[var(--primary-color)]
                bg-[transparent]
                px-4
                py-2
                focus:outline-none
                focus:bg-[--highlight-background]
                rounded-lg"/>
            <button type="submit" className="2xl:w-[30%] lg:w-1/2 w-full text-white bg-[var(--primary-color2)]
            px-2 py-4 rounded-[100px] flex items-center justify-center gap-2
            hover:scale-105
            font-bold
            hover:bg-[var(--primary-color)]
            text-[var(--reverse-text-color)]
            transition-all duration-200"
            >
                <FaPlus size={20}/>
                Add Transaction
            </button>
            </form>
    )
}

export default TransactionForm;