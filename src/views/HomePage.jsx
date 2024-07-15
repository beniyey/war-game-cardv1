import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { playerContext } from "../context/playerContext"

export default function HomePage() {

    const { setPlayer } = useContext(playerContext)

    const navigate = useNavigate()

    const [name, setName] = useState("")

    function isNameValid() {
        if (name == "") {
            return false
        } else {
            return true
        }
    }

    function createPlayer() {
        return {
            name: name,
        }
    }

    function startGame() {
        const isValid = isNameValid()

        if (!isValid) {
            alert("hi user, you must provide a name!")
            return
        }

        const player = createPlayer()
        setPlayer(player)
        navigate("/game")
    }

    return <div className="bg-gray-300 bg-opacity-25 px-16 py-24 rounded-2xl h-fit flex justify-around items-around flex-col bg-primaryBg gap-10">
        <h1 className=" text-cyan-300 text-3xl font-bold">Welcome to the best card game in the world!</h1>
        <span className=" w-full box-border items-center flex gap-6 justify-between">
            <label htmlFor="" className="font-bold text-white text-2xl">name:</label>
            <input type="text" className=" font-bold text-center w-full py-4 rounded-md border-2" onChange={(e) => setName(e.target.value)} />
        </span>
        <button className="font-bold" onClick={(startGame)}>Start game!</button>
    </div>
}