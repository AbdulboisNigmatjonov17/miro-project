import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section1() {
    const { t } = useTranslation()
    return (
        <section className='md:px-0 px-5'>
            <div className='w-full flex flex-wrap-reverse lg:justify-between justify-center items-center gap-5'>
                <div className='w-[440px] flex flex-col gap-10 items-start'>
                    <h1 className='font-bold text-5xl text-[#050038]'>{t("Section1.1.title")}</h1>
                    <p className='font-normal text-[18px] leading-6 text-[#05003899]'>{t("Section1.1.text")}</p>
                    <button aria-label="learn more" className='font-normal text-[18px] leading-6 text-[#4262FF]'>{t("Section1.learn more")} →</button>
                </div>
                <Image src="/hybridwork.png" alt="hybridwork image" width={550} height={535} />
            </div>
            <div className='w-full flex flex-wrap lg:justify-between justify-center items-center gap-5 lg:mt-0 mt-5'>
                <Image src="/integrations.png" alt="integrations image" width={550} height={535} />
                <div className='w-[440px] flex flex-col gap-10 items-start'>
                    <h1 className='font-bold text-5xl text-[#050038]'>{t("Section1.2.title")}</h1>
                    <p className='font-normal text-[18px] leading-6 text-[#05003899]'>{t("Section1.2.text")}</p>
                    <button aria-label="learn more" className='font-normal text-[18px] leading-6 text-[#4262FF]'>{t("Section1.learn more")} →</button>
                </div>
            </div>
        </section>
    )
}
