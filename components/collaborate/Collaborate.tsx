import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../button/Button'

type CollaborateItem = {
    title: string,
    about: string
}

export default function Collaborate() {
    const { t } = useTranslation()
    const collaborateData = t("collaborate", { returnObjects: true }) as CollaborateItem[];
    return (
        <section className='w-full flex flex-col items-center gap-3 my-10'>
            <h1 className='font-bold text-5xl lg:w-[460px] w-full text-[#050038] text-center'>{t("h1")}</h1>
            <div className='w-full flex flex-wrap justify-between gap-5'>
                {collaborateData.map((item, index) => (
                    <div key={index}
                        className='flex flex-col gap-7 p-5'>
                        <h3 className='text-[#050038] font-bold text-2xl'>{item.title}</h3>
                        <p className='text-[18px] text-[#05003899]'>{item.about}</p>
                    </div>
                ))}
            </div>
            <Button />
        </section>
    )
}
