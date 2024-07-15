export default function Card({ number, player = false }) {
    return <div className="  flex flex-row w-full items-center gap-10">
        <span className="bg-gradient-to-br from-gray-700 to-gray-600 w-36 bg-opacity-25  py-20 rounded-lg border-4 text-white font-bold text-2xl">
            {number}
        </span>
        <span className="text-white text-2xl font-bold">
            {player ? "player" : "computer"}
        </span>
    </div>
}