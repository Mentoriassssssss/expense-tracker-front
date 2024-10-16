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
                console.log(data)
                dispatch({
                    type: 'setKey',
                    payload: {
                        accessKey: data.accessToken,
                        refreshKey: data.refresToken,
                        currentUser: data.user
                    }
                })
                fetch(state.apiCore + 'api/getAllTransactions', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + data.accessToken,
                    },
                }).then(res => res.json()).then(data => {
                    data.sort((a: Transaction, b: Transaction) => {
                        return new Date(a.date).getTime() - new Date(b.date).getTime()
                    })
                    dispatch({
                        type: 'setTransactions',
                        payload: data
                    })
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