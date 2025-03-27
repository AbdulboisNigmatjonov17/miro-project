"use client"
import { useTranslation } from 'react-i18next'


interface yellowSectionData {
    title: string,
    text: string
}
export default function YellowSection() {
    const { t } = useTranslation()
    const yellowSectionData = t("Yellow section.data", { returnObjects: true }) as yellowSectionData[];
    return (
        <section className='bg-[#FFD02F] w-full my-20 flex flex-col items-center gap-10 py-20'>
                <div className='md:w-[500px] w-full text-center flex flex-col gap-4 text-[#050038]'>
                    <h1 className='md:text-5xl text-3xl font-bold leading-14'>{t("Yellow section.title")}</h1>
                    <h3 className='text-[18px] font-normal underline underline-offset-4'>{t("Yellow section.underline")}</h3>
                </div>
                <div className='Container flex flex-wrap justify-between'>
                    {yellowSectionData.map((item, index) => (
                        <div key={index} className='w-[360px] h-[225px] flex flex-col items-center justify-center gap-6 text-center py-3.5 px-6'>
                            <h1 className='text-[50px] font-extrabold'>{item.title}</h1>
                            <h4 className=''>{item.text}</h4>
                        </div>
                    ))}
                </div>
        </section>
    )
}
