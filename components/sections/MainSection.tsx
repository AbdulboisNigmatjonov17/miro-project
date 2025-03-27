"use client"
import Image from 'next/image'
import React, { ComponentType, useState } from 'react'

interface MainSectionProps {
    title: string,
    data: string[],
    img: string,
    comp: ComponentType
}
export default function MainSection({ title, data, img, comp }: MainSectionProps) {
    const [selectOne, setSelectOne] = useState<number | null>(null);
    return (
        <section className='w-full flex flex-col gap-8 my-20 lg:px-0 px-5'>
            <h1 className='font-bold text-5xl text-[#050038]'>{title}</h1>
            <div className='w-full flex flex-wrap justify-between gap-2 items-center'>
                {data.map((item: string, index: number) => (
                    <button aria-label="select one" onClick={() => setSelectOne(index)} key={index} className={`text-[#050038] border border-[#F2F2F2] rounded-3xl py-3 pl-4 pr-7 hover:bg-[#F1F3FD] ${selectOne === index ? 'bg-[#F1F3FD]' : ''} cursor-pointer`}>{item}</button>
                ))}
            </div>
            <div className='w-full flex md:flex-row flex-col-reverse justify-between items-start lg:gap-0 gap-5'>
                {React.createElement(comp)}
                <Image width={700} height={515} src={img} alt='MainSection hero image' />
            </div>
        </section>
    )
}
