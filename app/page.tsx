"use client";

import Collaborate from '@/components/collaborate/Collaborate';
import Hero from '@/components/hero/HeroBanner'
import Logos from '@/components/logo/Logos';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Collaborate />
      <section className='relative w-full h-[500px] my-10'>
        <Image src='/section.png' fill alt='Section Image' className='object-cover hover:scale-110 transition duration-200 cursor-pointer' />
      </section>
    </>
  )
}
