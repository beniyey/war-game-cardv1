import { useContext } from "react";
import { playerContext } from "../context/playerContext";

export default function Playing() {
    const string = useContext(playerContext)

    return (<p>{string}</p>)
}