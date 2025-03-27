"use client";

import Cards from '@/components/cards/Cards';
import Collaborate from '@/components/collaborate/Collaborate';
import Hero from '@/components/hero/HeroBanner';
import Logos from '@/components/logo/Logos';
import MainSection from '@/components/sections/MainSection';
import Section1 from '@/components/sections/Section1';
import YellowSection from '@/components/sections/YellowSection';
import Statisic from '@/components/sts/Statisic';
import { Check } from '@mui/icons-material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const FirstComp = () => {
  const { t } = useTranslation();
  return (
    <div className='w-[350px] py-8 px-4 flex flex-col gap-6 items-start'>
      <h4 className='text-[#050038] text-[18px] leading-6'>{t("Main Section.first comp.title")}</h4>
      <p className='text-[#050038B2] text-[18px] leading-6'>{t("Main Section.first comp.text")}</p>
      <button aria-label="learn more" className='font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer'>
        {t("Section1.learn more")} →
      </button>
    </div>
  );
};

const SecondComp = () => {
  const { t } = useTranslation();
  return (
    <div className='w-[350px] py-8 px-4 flex flex-col gap-16 items-start'>
      <div className='w-full flex flex-col items-start gap-8'>
        <ul className='w-full text-[#05003899] font-normal text-[18px] leading-6 flex flex-col gap-4'>
          <li><Check /> {t("Main Section.second comp.ul.li1")}</li>
          <li><Check /> {t("Main Section.second comp.ul.li2")}</li>
          <li><Check /> {t("Main Section.second comp.ul.li3")}</li>
        </ul>
        <button aria-label="learn more" className='font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer'>
          {t("Section1.learn more")} →
        </button>
      </div>
      <div className='w-full flex flex-col gap-3.5'>
        <h5 className='font-normal text-[18px] leading-6 text-[#05003899]'>
          {t("Main Section.second comp.title")}
        </h5>
        <div className='w-full flex gap-8'>
          <Image src="/section-logos/FirstLogo.png" alt="olmos logo" width={25} height={25} />
          <Image src="/section-logos/SecondLogo.png" alt="xd logo" width={25} height={25} />
          <Image src="/section-logos/ThirdLogo.png" alt="figma logo" width={25} height={25} />
          <Image src="/section-logos/FourthLogo.png" alt="qanaqadu n" width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const firstCompData = t("Main Section.first comp.arr", { returnObjects: true }) as string[];
  const secondCompData = t("Main Section.second comp.arr", { returnObjects: true }) as string[];

  return (
    <>
      <main className='Container'>
        <Hero />
        <Logos />
        <Collaborate />
        <Section1 />
        <section className='hidden md:flex relative w-full h-[500px] my-10 lg:px-0 px-5'>
          <Image
            src='/section.png'
            width={1200}
            height={500}
            alt='Section Image'
            className='object-cover w-full h-full hover:scale-110 transition duration-200 cursor-pointer'
          />
        </section>

        <MainSection title={t("Main Section.first comp.main")} data={firstCompData} img='/MainSection1.png' comp={FirstComp} />
        <MainSection title={t("Main Section.second comp.main")} data={secondCompData} img='/MainSection2.png' comp={SecondComp} />
      </main>
      <YellowSection />
      <article className='Container'>
        <Cards />
        <Statisic />
      </article>
    </>
  );
}
