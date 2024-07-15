import { Link, useParams } from "react-router-dom"

export default function ScorePage() {
    const { id } = useParams()

    return <div className="flex flex-col text-white bg-gray-400 px-10 py-20 rounded-2xl gap-10">
        <p>
            1 / 2
        </p>

        <Link className="bg-blue-600 py-2 px-4 rounded-md" to={"/game"}>
            play again!
        </Link>
    </div>
}