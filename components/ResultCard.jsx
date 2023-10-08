'use client'
import { useGetQuestionNum } from './zustand/state'

const ResultCard = () => {

    const { point } = useGetQuestionNum();

    return (
        <div className="flex flex-col h-screen w-full items-center justify-between">
            {
                point.map((x, i) => (
                    <h1 key={i}>{x}</h1>
                ))
            }
        </div>
    )
}

export default ResultCard