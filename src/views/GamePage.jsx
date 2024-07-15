import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"
import { generateCardsDeck, randomizeArray, selectRandomElement } from "../services/arrayUtils"
import clsx from "clsx"
import { playerContext } from "../context/playerContext"
import { computerContext } from "../context/computerContext"
import { useNavigate } from "react-router-dom"

export default function GamePage() {

    const { player, setPlayer } = useContext(playerContext)
    const { computer, setComputer } = useContext(computerContext)

    // hook to navigate to a different page
    const navigate = useNavigate()


    if (!player?.name) {
        navigate("/")
    }

    // temporary state for the game 
    const [playerWins, setPlayerWins] = useState(0)
    const [computerWins, setComputerWins] = useState(0)

    const [playerCard, setPlayerCard] = useState()
    const [computerCard, setComputerCard] = useState()


    function playTurn() {
        if (player.cardDeck.length === 1) { // if the length of the array is 1 we have played our last turn
            finish()
        } else {    // if there are turns left to play
            player.cardDeck.pop()
            computer.cardDeck.pop()

            setStates(player.cardDeck, computer.cardDeck)
        }
        console.log(player)
    }

    function setStates(playerDeck, computerDeck) {
        // Set state for player and computer on each play
        setPlayer({ ...player, cardDeck: playerDeck });
        setComputer({ cardDeck: computerDeck });

        // Get random cards for the player and computer
        const playerCard = selectRandomElement(playerDeck)
        const computerCard = selectRandomElement(computerDeck)

        // Set player and computer cards
        setPlayerCard(playerCard)
        setComputerCard(computerCard)

        // Check who is the winner of the round and set his win state
        playerCard > computerCard ? setPlayerWins(playerWins + 1) : setComputerWins(computerWins + 1)
    }

    function finish() {
        // Determine who is the winner and set player state accordingly
        if (playerWins > computerWins) {
            setPlayer({ ...player, wins: player?.wins + 1 || 1 })
        } else {
            setPlayer({ ...player, losses: player?.losses + 1 || 1 })
        }

        navigate("/score")
    }

    useEffect(() => {
        const [playerDeck, computerDeck] = randomizeArray(generateCardsDeck());

        setStates(playerDeck, computerDeck)
    }, [])

    return <div className="flex flex-col gap-10">

        <div className="flex flex-col gap-10">
            {
                // conditional rendering
                <>
                    <Card number={playerCard} player={true} />
                    <Card number={computerCard} />
                </>
            }
        </div>

        <div className={clsx(
            playerWins > computerWins && "text-green-300",
            playerWins < computerWins && "text-red-300",
            playerWins === computerWins && "text-white",
            "font-bold text-2xl"
        )}>
            {playerWins} / {computerWins}
        </div >

        <button onClick={playTurn}>
            next
        </button>

    </div>
}