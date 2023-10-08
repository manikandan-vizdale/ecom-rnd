'use client'
import Image from 'next/image'
import EcomImg from '../public/assets/ecom.png'

const HeroCard = () => {

    const scrollToDiscoverCard = () => {
        const discoverCardElement = document.getElementById("DiscoverCard");

        if (discoverCardElement) {
            discoverCardElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-between">
            <div className='flex flex-col gap-8'>
                <h1 className="font-bold text-5xl leading-[4rem]">Discover some insights and feedbacks about your business</h1>
                <button onClick={scrollToDiscoverCard} className='bg-black text-white w-fit text-lg px-8 p-4'>Discover</button>
            </div>
            <Image src={EcomImg} alt='ecom' width={400} height={400} />
        </div>
    )
}

export default HeroCard