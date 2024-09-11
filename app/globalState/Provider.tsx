'use client';
import { createContext, useContext, useReducer, useEffect } from "react";

type GlobalState = {
    path: string,
}
type Action = {
    type: string,
    payload: any,
}

const initState : GlobalState = {
    path: '/',
}

const reducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case 'setPath':
            return {
                ...state,
                path: action.payload
            }
        default:
            throw new Error("Invalid action type: " + action.type );
    }
}

const Context = createContext<[GlobalState, React.Dispatch<Action>]>([initState, () => {}]);

export const Provider = ({ children } : {children: React.ReactNode}) => {

    useEffect(() => {
        if (window.location.pathname !== initState.path) {
            initState.path = window.location.pathname;
        }
    })

    const [state, dispatch] = useReducer(reducer, initState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export const useGlobal = () => useContext(Context)