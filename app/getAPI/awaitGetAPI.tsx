"use client";
import { useGlobal } from "../globalState/Provider";
import GetAPI from "./getAPI";

interface GetAPIProps {
    type: string
}

export default function AwaitGetAPI ({type} : GetAPIProps) {

    const [state,] = useGlobal();

    return state.key.accessKey && <GetAPI type={type}/>;
}