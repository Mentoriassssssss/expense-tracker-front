'use client';

import { useState, useEffect } from 'react';
import { useGlobal } from '../globalState/Provider';

interface GetAPIProps {
    type: string;
    params?: any;
}

const GetAPI = ({type, params} : GetAPIProps) => {
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
            })
        }
    }, [])

    return (
        <>
        </>
    )
}

export default GetAPI;