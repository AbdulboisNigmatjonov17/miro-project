"use client";

import Collaborate from '@/components/collaborate/Collaborate';
import Hero from '@/components/hero/HeroBanner'
import Logos from '@/components/logo/Logos';
import MainSection from '@/components/sections/MainSection';
import Section1 from '@/components/sections/Section1';
import { Check } from '@mui/icons-material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const firstComp = () => {
  const { t } = useTranslation()
  return (
    <div className='w-[350px] py-8 px-4 flex flex-col gap-6 items-start'>
      <h4 className='text-[#050038] text-[18px] leading-6'>{t("Main Section.first comp.title")}</h4>
      <p className='text-[#050038B2] text-[18px] leading-6'>{t("Main Section.first comp.text")}</p>
      <button className='font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer'>{t("Section1.learn more")} →</button>
    </div>
  )
}
export const secondComp = () => {
  const { t } = useTranslation()
  return (
    <div className='w-[350px] py-8 px-4 flex flex-col gap-16 items-start'>
      <div className='w-full flex flex-col items-start gap-8'>
        <ul className='w-full text-[#05003899] font-normal text-[18px] leading-6 flex flex-col gap-4'>
          <li><Check /> {t("Main Section.second comp.ul.li1")}</li>
          <li><Check /> {t("Main Section.second comp.ul.li2")}</li>
          <li><Check /> {t("Main Section.second comp.ul.li3")}</li>
        </ul>
        <button className='font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer'>{t("Section1.learn more")} →</button>
      </div>
      <div className='w-full flex flex-col gap-3.5'>
        <h5 className='font-normal text-[18px] leading-6 text-[#05003899]'>{t("Main Section.second comp.title")}</h5>
        <div className='w-full flex gap-8'>
          <Image src="/section-logos/FirstLogo.png" alt="olmos logo" width={25} height={25} />
          <Image src="/section-logos/SecondLogo.png" alt="xd logo" width={25} height={25} />
          <Image src="/section-logos/ThirdLogo.png" alt="figma logo" width={25} height={25} />
          <Image src="/section-logos/FourthLogo.png" alt="qanaqadu n" width={25} height={25} />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const firstCompData = t("Main Section.first comp.arr", { returnObjects: true }) as string[];
  const secondCompData = t("Main Section.second comp.arr", { returnObjects: true }) as string[];

  return (
    <>
      <Hero />
      <Logos />
      <Collaborate />
      <Section1 />
      <section className='relative w-full h-[500px] my-10'>
        <Image src='/section.png' fill alt='Section Image' className='object-cover hover:scale-110 transition duration-200 cursor-pointer' />
      </section>
      <MainSection title={t("Main Section.first comp.main")} data={firstCompData} img='/MainSection1.png' comp={firstComp} />
      <MainSection title={t("Main Section.second comp.main")} data={secondCompData} img='/MainSection2.png' comp={secondComp} />
    </>
  )
}
