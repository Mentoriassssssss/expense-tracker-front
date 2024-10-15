import TransactionForm from "./form";

export default function ViewTransactions() {

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
    gap-2
        ">
            <p className="w-full text-[var(--primary-color)] text-3xl font-semibold mb-2">Add new transaction</p>
           <div  className="min-w-[30%] h-full flex flex-col items-start justify-start gap-6">
            <TransactionForm />
            </div>
        </div>
    );
}