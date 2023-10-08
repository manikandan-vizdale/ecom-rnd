'use client'
import { useGetQuestionNum } from '@/components/zustand/state'
import DiscoverCard from '../components/DiscoverCard'
import HeroCard from '../components/HeroCard'
import ResultCard from '@/components/ResultCard';

export default function Home() {

  const { questionNum } = useGetQuestionNum();

  console.log(questionNum);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24">
      <HeroCard />
      {questionNum != 14 && <DiscoverCard />}
      {questionNum == 14 && <ResultCard />}
    </main>
  )
}
