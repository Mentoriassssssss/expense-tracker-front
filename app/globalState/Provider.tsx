'use client';
import { access } from "fs";
import { createContext, useContext, useReducer, useEffect } from "react";
import GetAPI from "../getAPI/getAPI";

type Transaction = {
    _id: string,
    title: string,
    amount: number,
    date: Date,
    ref: string,
}

type GlobalState = {
    path: string,
    username: string,
    password: string,
    key: {
        accessKey: string,
        refreshKey: string,
    },
    apiCore: string,
    currentUser?: {
        _id: string,
        username: string,
        name: string,
        money: number,
        transactions?: Transaction[],
    }
}
type Action = {
    type: string,
    payload: any,
}

const initState: GlobalState = {
    path: '/',
    username: 'mentorias',
    password: '15215215a',
    key: {
        accessKey: '',
        refreshKey: '',
    },
    apiCore: 'http://localhost:8000/',
}

const reducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case 'setPath':
            return {
                ...state,
                path: action.payload
            }
        case 'setKey':
            return {
                ...state,
                key: {
                    accessKey: action.payload.accessKey,
                    refreshKey: action.payload.refreshKey
                },
                currentUser: action.payload.currentUser
            }
        default:
            throw new Error("Invalid action type: " + action.type);
    }
}

const Context = createContext<[GlobalState, React.Dispatch<Action>]>([initState, () => { }]);

export const Provider = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        if (window.location.pathname !== initState.path) {
            initState.path = window.location.pathname;
        }
    })

    const [state, dispatch] = useReducer(reducer, initState);
    return <Context.Provider value={[state, dispatch]}>
        <GetAPI type="login" />
        {children}
    </Context.Provider>;
}

export const useGlobal = () => useContext(Context)
export type { GlobalState }