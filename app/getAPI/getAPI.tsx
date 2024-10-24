'use client';

import { useEffect } from 'react';
import { useGlobal } from '../globalState/Provider';

import { Transaction } from '../globalState/Provider';

interface GetAPIProps {
    type: string;
}

const GetAPI = ({type} : GetAPIProps) => {
    const [state, dispatch] = useGlobal();

    useEffect(() => {
        if (type === 'login') {
            fetch(state.apiCore + 'auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: state.username,
                    password: state.password
                })
            }).then(res => res.json()).then(data => {
                dispatch({
                    type: 'setKey',
                    payload: {
                        accessKey: data.accessToken,
                        refreshKey: data.refresToken,
                        currentUser: data.user
                    }
                })
            })
        }
        if (type === "getAllTransactions") {
            fetch(state.apiCore + 'api/getAllTransactions', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + state.key.accessKey,
                },
            }).then(res => res.json()).then(data => {
                let income = 0;
                let expense = 0;
                data.forEach((element: Transaction) => {
                    income += element.type === 'Income' ? element.amount : 0;
                    expense += element.type === 'Expense' ? element.amount : 0;
                })
                dispatch({
                    type: 'setTransactions',
                    payload: {
                        transactions: data,
                        income: income,
                        expense: expense,
                    }
                })
            })
        }
    }, [])

    return (
        <>
        </>
    )
}

export default GetAPI;