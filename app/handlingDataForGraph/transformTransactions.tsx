import { Action, GlobalState, Transaction } from "../globalState/Provider"
import { useGlobal } from "../globalState/Provider";

export default function TransformTransactions() {

    const [state,] : [GlobalState, React.Dispatch<Action>] = useGlobal();
    
    const transactionsSortedByDate: Record<string, {Income: number[], Expense: number[]}> = {}
    state.currentUser?.transactions?.forEach((transaction: Transaction) => {
        if (!transactionsSortedByDate[transaction.date.toString()]) {
            transactionsSortedByDate[transaction.date.toString()] = {
                Income: [],
                Expense: []
            };
        }
        transactionsSortedByDate[transaction.date.toString()][transaction.type].push(transaction.amount);
    });
    return transactionsSortedByDate;
}